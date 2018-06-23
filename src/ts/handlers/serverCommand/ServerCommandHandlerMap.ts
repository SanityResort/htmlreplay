import ServerCommandHandler from './ServerCommandHandler';
import GameStateHandler from './GameStateHandler';
import GameState from '../../components/board/GameState';
import ReplayHandler from './ReplayHandler';
import ModelSyncHandler from './ModelSyncHandler';
import AddPlayerHandler from './AddPlayerHandler';

export default class ServerCommandHandlerMap {
    private static MAP: Map<string, ServerCommandHandler> = new Map<string, ServerCommandHandler>()

    static get(key: string): ServerCommandHandler| undefined {
        return ServerCommandHandlerMap.MAP.get(key);
    }

    static put(value: ServerCommandHandler) {
        ServerCommandHandlerMap.MAP.set(value.supportedCommand, value);
    }

    static init(gameState: GameState) {
        this.put(new GameStateHandler(gameState))
        this.put(new ReplayHandler(gameState))
        this.put(new ModelSyncHandler(gameState))
        this.put(new AddPlayerHandler(gameState))
   }
}