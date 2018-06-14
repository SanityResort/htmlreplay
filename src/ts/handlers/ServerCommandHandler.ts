import ServerCommand from '../model/commands/ServerCommand';
import BoardState from '../BoardState';

export default abstract class ServerCommandHandler {
    abstract handle(prevState: BoardState, command: ServerCommand): [BoardState, Boolean];
}