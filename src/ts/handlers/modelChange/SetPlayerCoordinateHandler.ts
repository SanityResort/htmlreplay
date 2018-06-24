import ModelChangeHandler from './ModelChangeHandler';
import ModelChange from '../../model/commands/ModelChange';
import BoardState from '../../components/board/BoardState';
import Player from '../../model/Player';
import BoardStateUtil from '../../util/BoardStateUtil';

export default class SetPlayerCoordinateHandler extends ModelChangeHandler {
    supportedChange = "fieldModelSetPlayerCoordinate"


    handle(modelChange: ModelChange, boardState: BoardState): void {
        let player: Player|undefined = BoardStateUtil.playerById(boardState, modelChange.modelChangeKey)
        if (player) {
            player.coordinate = {x: modelChange.modelChangeValue[0], y:modelChange.modelChangeValue[1]}
        }
    }
}