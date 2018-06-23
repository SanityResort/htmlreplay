import ServerCommand from '../../model/commands/ServerCommand';
import GameState from '../../components/board/GameState';

export default abstract class ServerCommandHandler {

    protected gameState: GameState

    constructor(gameState: GameState) {
        this.gameState = gameState;
    }

    abstract handle(command: ServerCommand): void;

    abstract supportedCommand: string;
}