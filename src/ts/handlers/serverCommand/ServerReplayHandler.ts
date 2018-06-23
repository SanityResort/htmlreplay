import ServerCommandHandler from './ServerCommandHandler';
import ServerCommand from "../../model/commands/ServerCommand";
import ServerReplay from '../../model/commands/ServerReplay';
import ServerCommandHandlerMap from './ServerCommandHandlerMap';

export default class ServerReplayHandler extends ServerCommandHandler {
    supportedCommand = "serverReplay";

    handle(command: ServerCommand): void {
        let replayCommand: ServerReplay = (<ServerReplay>command)

        if (replayCommand.commandArray) {
            let commands: any[] = replayCommand.commandArray
            commands.forEach(command => {  
                
                let handler: ServerCommandHandler|undefined = ServerCommandHandlerMap.get(command.netCommandId)

                if (handler) {
                    handler.handle(command);
                } else {
                    console.log("Unhandled replay command: " + JSON.stringify(command));
                }
            });
        }

    }
}