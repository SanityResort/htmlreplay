import ModelChangeHandler from './ModelChangeHandler';
import ModelChange from '../../model/commands/ModelChange';
import BoardState from '../../components/board/BoardState';
import Team from '../../model/Team';
import Inducement from '../../model/Inducement';
import BoardStateUtil from '../../util/BoardStateUtil';

export default class AddInducementHandler extends ModelChangeHandler {

    supportedChange = "inducementSetAddInducement"

    handle(modelChange: ModelChange, boardState: BoardState) {
        let team: Team = BoardStateUtil.teamByState(boardState, modelChange.modelChangeKey)
        let inducements: Inducement[] = team.inducementSet.inducementArray
        let newInducement: Inducement = modelChange.modelChangeValue
        let existingEntry = inducements.find(inducement => inducement.inducementType === newInducement.inducementType)

        if (existingEntry) {
            existingEntry.uses = newInducement.uses
            existingEntry.value = newInducement.value
        } else {
            inducements.push(newInducement)
        }
    }
}