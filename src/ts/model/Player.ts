import {Gender} from "./Gender"
import {PlayerType} from "./PlayerType"
import Coordinate from './Coordinate';
import PlayerState from './PlayerState';

export default class Player {
    playerId: string;
    playerNr: number;
    position: string;
    playerName: string;
    playerGender: Gender;
    playerType: PlayerType;
    movement: number;
    strength: number;
    agility: number;
    armour: number;
    lastingInjuries: string[];
    recoveringInjury: string;
    urlPortrait: URL;
    urlIconSet: URL;
    nrOfIcons: number;
    positionIconIndex: number;
    baseSkills: string[];
    additionalSkills: string[];
    coordinate: Coordinate;
    playerState: PlayerState;
    shorthand: string;
}