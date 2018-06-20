import { Board } from '../components/Board';
import BoardState from '../BoardState';
import ServerCommand from '../model/commands/ServerCommand';
import ServerCommandHandler from './ServerCommandHandler';
import ServerGameStateHandler from './ServerGameStateHandler';
import deepEqual = require("deep-equal");

export default class ServerCommandProcessor {
    board: Board;
    lastState: BoardState = new BoardState();
    handlers: ServerCommandHandler[] = [new ServerGameStateHandler()];

    constructor(board: Board) {
        this.board = board
    }

    public handle(command: ServerCommand): void {
        console.log("Processign command: " + command.netCommandId)
        let handled: Boolean = false;
        this.handlers.forEach(handler => {
            if (handler.handles(command)) {
                let newState = handler.handle( {...this.lastState}, command);
                handled = true;
                if (!deepEqual(this.lastState, newState)) {
                    this.board.addState(newState);
                } else {
                    console.log("Command "+command.netCommandId+" has been handled but state has not been changed.") 
                }
            }
        });
        if (!handled) {
            console.log("Unhandled command: "+command.netCommandId);
        }
    }
}