import ModelChange from '../../model/commands/ModelChange';

export default abstract class ModelChangeHandler {

    abstract handle(command: ModelChange): void;

    abstract supportedChange: string;
}