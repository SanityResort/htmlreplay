import ModelChangeHandler from './ModelChangeHandler';
import GameFinishedHandler from './GameFinishedHandler';
import AddInducementHandler from './AddInducementHandler';
import FumbblSocket from '../../FumbblSocket';
import SetWeatherHandler from './SetWeatherHandler';
import AddPlayerHandler from '../serverCommand/AddPlayerHandler';
import SetPlayerStateHandler from './SetPlayerStateHandler';
import SetPlayerCoordinateHandler from './SetPlayerCoordinateHandler';

export default class ModelChangeHandlerMap {
    private static MAP: Map<string, ModelChangeHandler> = new Map<string, ModelChangeHandler>()

    static get(key: string): ModelChangeHandler| undefined {
        return ModelChangeHandlerMap.MAP.get(key);
    }

    static put(value: ModelChangeHandler) {
        ModelChangeHandlerMap.MAP.set(value.supportedChange, value);
    }

    static init(socket: FumbblSocket) {
       this.put(new GameFinishedHandler(socket))
       this.put(new AddInducementHandler())
       this.put(new SetWeatherHandler())
       this.put(new SetPlayerStateHandler())
       this.put(new SetPlayerCoordinateHandler())
    }
}