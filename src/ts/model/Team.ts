import Player from './Player';

export default class Team {
    teamName: string;
    coach: string;
    race: string;
    reRolls: number;
    apothecaries: number;
    baseIconPath: URL;
    logoUrl: URL;
    players: Map<string, Player>;

    turnNr: 8
    blitzUsed: false
    foulUsed: false
    reRollUsed: false
    handOverUsed: false
    passUsed: false
    coachBanned: false
    leaderState: "none"
    //inducementSet": {"inducementArray": [{"inducementType": "mercenaries","value": 1,"uses": 0},{"inducementType": "starPlayers","value": 1,"uses": 0}],"cardsAvailable": [],"cardsActive": [],"cardsDeactivated": []}}
}