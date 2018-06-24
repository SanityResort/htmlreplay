import Player from "../model/Player";

export default class PlayerMapper {
    static map(serverPlayer: any, positionArray: any[]) : Player {
        let player: Player = new Player();
        let position: any = positionArray.find(pos => pos.positionId === serverPlayer.positionId);

        if (position) {
            player.baseSkills=position.skillArray ? position.skillArray : [];
            player.position=position.positionName;
            player.shorthand=position.shorthand;
        } else {
            player.baseSkills=[];
            player.position="";
            player.shorthand="";
        }
     
        player.additionalSkills=(<any[]>serverPlayer.skillArray).filter(additionalSkill => 
            player.baseSkills.indexOf(additionalSkill) === -1
        )
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

        return player;
    }
}