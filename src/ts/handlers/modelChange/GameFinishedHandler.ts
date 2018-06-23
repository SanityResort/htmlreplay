import ModelChangeHandler from './ModelChangeHandler';
import ModelChange from '../../model/commands/ModelChange';
import FumbblSocket from '../../FumbblSocket';
import BoardState from '../../components/board/BoardState';

export default class GameFinishedHandler extends ModelChangeHandler {
    supportedChange = "gameSetFinished"
    socket:FumbblSocket

    constructor(socket: FumbblSocket) {
        super();
        this.socket = socket;
    }

    handle(modelChange: ModelChange, boardState: BoardState): void {
        this.socket.close();
        console.log("Last state: " + JSON.stringify(boardState))
        console.log("Home Players: ");
        boardState.home.players.forEach(player => console.log(JSON.stringify(player)))
        console.log("Away Players: ");
        boardState.away.players.forEach(player => console.log(JSON.stringify(player)))
    }
}