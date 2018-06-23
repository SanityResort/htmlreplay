import BoardState from '../../components/board/BoardState';
import ServerCommandHandler from '../serverCommand/ServerCommandHandler';
import ServerCommand from '../../model/commands/ServerCommand';
import Team from '../../model/Team';
import AddPlayerCommand from '../../model/commands/AddPlayerCommand';
import Player from '../../model/Player';
import PlayerMapper from '../../mapper/PlayerMapper';

export default class AddPlayerHandler extends ServerCommandHandler {
    supportedCommand = "serverAddPlayer"


    handle(command: ServerCommand): void {
        let newState: BoardState = this.gameState.copyLatestState()
        let addedPlayer: AddPlayerCommand = <AddPlayerCommand>command;

        let team: Team = newState.teamById(addedPlayer.teamId)
        let newPlayer: Player = PlayerMapper.map(addedPlayer.player, team.positionArray);

        newPlayer.playerState = addedPlayer.playerState
        team.players.set(newPlayer.playerId, newPlayer)

        this.gameState.addState(newState);
    }
}