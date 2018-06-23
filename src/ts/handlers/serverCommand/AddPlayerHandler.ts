import BoardState from '../../components/board/BoardState';
import ServerCommandHandler from '../serverCommand/ServerCommandHandler';
import ServerCommand from '../../model/commands/ServerCommand';
import Team from '../../model/Team';
import AddPlayerCommand from '../../model/commands/AddPlayerCommand';
import Player from '../../model/Player';
import PlayerMapper from '../../util/PlayerMapper';
import BoardStateUtil from '../../util/BoardStateUtil';

export default class AddPlayerHandler extends ServerCommandHandler {
    supportedCommand = "serverAddPlayer"


    handle(command: ServerCommand): void {
        let newState: BoardState = this.gameState.copyLatestState()
        let addedPlayer: AddPlayerCommand = <AddPlayerCommand>command;

        let team: Team = BoardStateUtil.teamById(newState, addedPlayer.teamId)
        let newPlayer: Player = PlayerMapper.map(addedPlayer.player, team.positionArray);

        newPlayer.playerState = addedPlayer.playerState
        let playerIndex = team.players.map(player => player.playerId).indexOf(newPlayer.playerId)

        if (playerIndex > -1 ) {
            team.players.splice(playerIndex, 1, newPlayer)
        } else {
            team.players.push(newPlayer)
        }

        this.gameState.addState(newState);
    }
}