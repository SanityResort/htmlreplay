import Team from '../../model/Team';
import FieldModel from '../../model/FieldModel';
import Player from '../../model/Player';

export default class BoardState {
    home: Team;
    away: Team;
    actingPlayer: any;
    fieldModel: FieldModel;
}