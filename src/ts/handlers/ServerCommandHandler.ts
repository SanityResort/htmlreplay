import ServerCommand from '../model/commands/ServerCommand';
import BoardState from '../BoardState';

export default abstract class ServerCommandHandler {
    abstract handle(prevState: BoardState, command: ServerCommand): BoardState;

    protected abstract supportedCommand: String;

    handles(command: ServerCommand): Boolean {
        return command.netCommandId === this.supportedCommand;
    }
}