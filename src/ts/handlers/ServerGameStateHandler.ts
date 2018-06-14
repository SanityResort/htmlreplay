import ServerCommandHandler from './ServerCommandHandler';
import ServerCommand from '../model/commands/ServerCommand';
import BoardState from '../BoardState';
import Team from '../model/Team';
import Player from '../model/Player';

export default class ServerGameStateHandler extends ServerCommandHandler {
    handle(prevState: BoardState, command: ServerCommand): [BoardState, Boolean] {
        if (command.netCommandId=="serverGameState") {
            prevState.home = this.mapTeam((<any>command).game.teamHome);
            prevState.away = this.mapTeam((<any>command).game.teamAway);
            return [prevState, true];
        }
        return [prevState, false];
    }

    private mapTeam(serverTeam: any): Team {
        let team: Team = new Team()
        team.apothecaries = serverTeam.apothecaries;
        team.baseIconPath = serverTeam.baseIconPath;
        team.coach = serverTeam.coach;
        team.logoUrl = serverTeam.logoUrl;
        team.race = serverTeam.race;
        team.reRolls = serverTeam.reRolls;
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