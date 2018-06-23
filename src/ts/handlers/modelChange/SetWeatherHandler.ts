import ModelChangeHandler from './ModelChangeHandler';
import ModelChange from '../../model/commands/ModelChange';
import BoardState from '../../components/board/BoardState';

export default class SetWeatherHandler extends ModelChangeHandler {
    supportedChange = "fieldModelSetWeather"

    handle(modelChange: ModelChange, boardState: BoardState) {
        boardState.fieldModel.weather = modelChange.modelChangeValue
    }
}