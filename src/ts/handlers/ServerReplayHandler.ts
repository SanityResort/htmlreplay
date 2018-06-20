import ServerCommandHandler from './ServerCommandHandler';
import BoardState from "../BoardState";
import ServerCommand from "../model/commands/ServerCommand";
import ServerReplay from '../model/commands/ServerReplay';

export default class ServerReplayHandler extends ServerCommandHandler {
    supportedCommand = "serverReplay";

    handle(prevState: BoardState, command: ServerCommand): BoardState {
        let replayCommand: ServerReplay = (<ServerReplay>command)

        return prevState;
    }
}