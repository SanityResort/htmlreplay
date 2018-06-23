import ModelChangeHandler from './ModelChangeHandler';
import ModelChange from '../../model/commands/ModelChange';
import FumbblSocket from '../../FumbblSocket';

export default class GameFinishedHandler extends ModelChangeHandler {
    supportedChange = "gameSetFinished"
    socket:FumbblSocket

    constructor(socket: FumbblSocket) {
        super();
        this.socket = socket;
    }

    handle(modelChange: ModelChange): any {console.log("QUIT")
        this.socket.close();
        return {};
    }
}