import ModelChangeHandler from './ModelChangeHandler';
import ModelChange from '../../model/commands/ModelChange';
import BoardState from '../../components/board/BoardState';
import Player from '../../model/Player';

export default class SetPlayerStateHandler extends ModelChangeHandler {
    supportedChange = "fieldModelSetPlayerState"


    handle(modelChange: ModelChange, boardState: BoardState): void {
        let player: Player|undefined = boardState.playerById(modelChange.modelChangeKey)
        if (player) {
            player.playerState = modelChange.modelChangeValue
        }
    }
}