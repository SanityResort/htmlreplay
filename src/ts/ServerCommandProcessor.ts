import Board from './components/board/Board';
import ServerCommand from './model/commands/ServerCommand';
import ServerCommandHandler from './handlers/serverCommand/ServerCommandHandler';
import ServerCommandHandlerMap from './handlers/serverCommand/ServerCommandHandlerMap';

export default class ServerCommandProcessor {

    private ignoredCommands: string[] = ["serverGameTime"]

    public handle(command: ServerCommand): void {
        if (this.ignoredCommands.indexOf(command.netCommandId) === -1) {
            let handler: ServerCommandHandler|undefined = ServerCommandHandlerMap.get(command.netCommandId);
            if (handler) {
                handler.handle( command);
            } else {
                console.log("Unhandled command: "+JSON.stringify(command));
            }
        }
    }
}