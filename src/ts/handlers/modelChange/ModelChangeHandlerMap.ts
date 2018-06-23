import ModelChangeHandler from './ModelChangeHandler';
import GameFinishedHandler from './GameFinishedHandler';
import FumbblSocket from '../../FumbblSocket';

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
    }
}