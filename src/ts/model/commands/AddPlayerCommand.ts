import ServerCommand from './ServerCommand';
import PlayerState from '../PlayerState';

export default class AddPlayerCommand extends ServerCommand {
        teamId: string
        player: any;
        playerState: PlayerState;
}