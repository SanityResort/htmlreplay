import ModelChangeHandler from './ModelChangeHandler';
import ModelChange from '../../model/commands/ModelChange';
import BoardState from '../../components/board/BoardState';
import Player from '../../model/Player';

export default class SetPlayerCoordinateHandler extends ModelChangeHandler {
    supportedChange = "fieldModelSetPlayerCoordinate"


    handle(modelChange: ModelChange, boardState: BoardState): void {
        let player: Player|undefined = boardState.playerById(modelChange.modelChangeKey)
        if (player) {
            player.coordinate = modelChange.modelChangeValue
        }
    }
}