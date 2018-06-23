import Player from './Player';
import Inducement from './Inducement';

export default class Team {
    teamName: string;
    teamId: string;
    coach: string;
    race: string;
    reRolls: number;
    apothecaries: number;
    baseIconPath: URL;
    logoUrl: URL;
    players: Player[];
    turnNr: number
    blitzUsed: boolean
    foulUsed: boolean
    reRollUsed: boolean
    handOverUsed: boolean
    passUsed: boolean
    coachBanned: boolean
    leaderState: string
    inducementSet: {
        inducementArray: Inducement[],
        cardsAvailable: string[],
        cardsActive: string[],
        cardsDeactivated: string[]
    }
    positionArray:any[]
}