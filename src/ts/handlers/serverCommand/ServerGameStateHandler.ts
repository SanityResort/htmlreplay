import ServerCommandHandler from './ServerCommandHandler';
import ServerCommand from '../../model/commands/ServerCommand';
import BoardState from '../../components/board/BoardState';
import Team from '../../model/Team';
import Player from '../../model/Player';
import ServerGameState from '../../model/commands/ServerGameState';

export default class ServerGameStateHandler extends ServerCommandHandler {

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
        return {...newState, ...{actingPlayer: game.actingPlayer, fieldModel: game.fieldModel}};
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

        let playerArray:any[] =  (<any[]>serverTeam.playerArray);
        let positionArray:any[] = serverTeam.roster.positionArray

        team.players = new Map<string,Player>(playerArray.map(serverPlayer => {
            let player: Player = new Player();
            player.additionalSkills=serverPlayer.skillArray
            player.agility=serverPlayer.agility;
            player.playerId=serverPlayer.playerId;
            player.playerNr=serverPlayer.playerNr;
            player.playerName=serverPlayer.playerName;
            player.playerGender=serverPlayer.playerGender;
            player.playerType=serverPlayer.playerType;
            player.movement=serverPlayer.movement;
            player.strength=serverPlayer.strength;
            player.armour=serverPlayer.armour;
            player.lastingInjuries=serverPlayer.lastingInjuries;
            player.recoveringInjury=serverPlayer.recoveringInjury;
            player.urlPortrait=serverPlayer.urlPortrait;
            player.urlIconSet=serverPlayer.urlIconSet;
            player.nrOfIcons=serverPlayer.nrOfIcons;
            player.positionIconIndex=serverPlayer.positionIconIndex;
            
            let position: any = positionArray.find(pos => pos.positionId === serverPlayer.positionId);

            if (position) {
                player.baseSkills=position.skillArray;
                player.position=serverPlayer.positionName;
                player.shorthand=serverPlayer.shorthand;
            } else {
                player.baseSkills=[];
                player.position="";
                player.shorthand="";
            }


            return <[string, Player]>[player.playerId, player];

        }));        
        return team;
    }
}