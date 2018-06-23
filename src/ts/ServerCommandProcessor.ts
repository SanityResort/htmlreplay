import Board from './components/board/Board';
import BoardState from './components/board/BoardState';
import ServerCommand from './model/commands/ServerCommand';
import ServerCommandHandler from './handlers/serverCommand/ServerCommandHandler';
import ServerCommandHandlerMap from './handlers/serverCommand/ServerCommandHandlerMap';

export default class ServerCommandProcessor {
    board: Board;
    lastState: BoardState = new BoardState();

    constructor(board: Board) {
        this.board = board
    }

    public handle(command: ServerCommand): void {
        let handler: ServerCommandHandler|undefined = ServerCommandHandlerMap.get(command.netCommandId);
        if (handler) {
             handler.handle( command);
        } else {
            console.log("Unhandled command: "+JSON.stringify(command));
        }
    }
}