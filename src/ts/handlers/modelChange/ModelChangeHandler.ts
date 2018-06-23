import ModelChange from '../../model/commands/ModelChange';
import BoardState from '../../components/board/BoardState';

export default abstract class ModelChangeHandler {

    abstract handle(command: ModelChange, newState: BoardState): void;

    abstract supportedChange: string;
}