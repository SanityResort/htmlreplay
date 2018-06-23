import ServerCommandHandler from './ServerCommandHandler';
import ServerCommand from '../../model/commands/ServerCommand';
import BoardState from '../../components/board/BoardState';
import Team from '../../model/Team';
import Player from '../../model/Player';
import ServerGameState from '../../model/commands/ServerGameState';
import PlayerMapper from '../../util/PlayerMapper';

export default class GameStateHandler extends ServerCommandHandler {

    supportedCommand = "serverGameState";

    handle(command: ServerCommand): void {
        let game: any = (<ServerGameState>command).game;
        let newState: BoardState = this.gameState.copyLatestState()
        newState.home = this.mapData(game.turnDataHome, this.mapTeam(game.teamHome));
        newState.away = this.mapData(game.turnDataAway, this.mapTeam(game.teamAway));
        newState = this.mapAdditionalFields(newState, game);
        this.gameState.addState(newState);
    }

    private mapAdditionalFields(newState: BoardState, game: any): BoardState {
        let coordinates = (<any[]>game.fieldModel.playerDataArray);
        [newState.home, newState.away].forEach(team => {
            team.players.forEach(player => {
                let serverCoordinate = coordinates.find(coordinate => coordinate.playerId == player.playerId);
                if (serverCoordinate) {
                    player.coordinate = serverCoordinate.playerCoordinate;
                    player.playerState = serverCoordinate.playerState;
                }
                
            })
        });
        newState.actingPlayer = game.actingPlayer;
        newState.fieldModel = game.fieldModel;
        return newState;
    }

    private mapData(turnData: any, team: Team): Team {
        return {...team, ...turnData};
    }

    private mapTeam(serverTeam: any): Team {
        let team: Team = new Team()
        team.baseIconPath = serverTeam.baseIconPath;
        team.coach = serverTeam.coach;
        team.logoUrl = serverTeam.logoUrl;
        team.race = serverTeam.race;
        team.teamName = serverTeam.teamName;
        team.teamId = serverTeam.teamId;
        team.positionArray = serverTeam.roster.positionArray

        let playerArray:any[] =  (<any[]>serverTeam.playerArray);

        team.players = playerArray.map(serverPlayer => PlayerMapper.map(serverPlayer, team.positionArray));        
        return team;
    }
}