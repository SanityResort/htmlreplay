import ModelChange from '../../model/commands/ModelChange';

export default abstract class ModelChangeHandler {

    abstract handle(command: ModelChange): any;

    abstract supportedChange: string;
}