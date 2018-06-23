import Team from '../../model/Team';
import FieldModel from '../../model/FieldModel';

export default class BoardState {
    home: Team;
    away: Team;
    actingPlayer: any;
    fieldModel: FieldModel;

    teamByState(key: string): Team {
        return key === "home" ? this.home : this.away
    }

    teamById(id: string): Team {
        return id === this.home.teamId ? this.home: this.away
    }
}