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
}