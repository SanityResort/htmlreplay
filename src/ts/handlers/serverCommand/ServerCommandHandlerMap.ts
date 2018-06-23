import ServerCommandHandler from './ServerCommandHandler';
import ServerGameStateHandler from './ServerGameStateHandler';
import GameState from '../../components/board/GameState';
import ServerReplayHandler from './ServerReplayHandler';
import ServerModelSyncHandler from './ServerModelSyncHandler';

export default class ServerCommandHandlerMap {
    private static MAP: Map<string, ServerCommandHandler> = new Map<string, ServerCommandHandler>()

    static get(key: string): ServerCommandHandler| undefined {
        return ServerCommandHandlerMap.MAP.get(key);
    }

    static put(value: ServerCommandHandler) {
        ServerCommandHandlerMap.MAP.set(value.supportedCommand, value);
    }

    static init(gameState: GameState) {
        this.put(new ServerGameStateHandler(gameState))
        this.put(new ServerReplayHandler(gameState))
        this.put(new ServerModelSyncHandler(gameState))
    }
}