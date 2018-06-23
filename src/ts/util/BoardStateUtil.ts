import BoardState from "../components/board/BoardState";
import Team from '../model/Team';
import Player from "../model/Player";

export default class BoardStateUtil {
    static teamByState(boardState: BoardState, key: string): Team {
        return key === "home" ? boardState.home : boardState.away
    }

    static teamById(boardState: BoardState, id: string): Team {
        return id === boardState.home.teamId ? boardState.home: boardState.away
    }

    static playerById(boardState: BoardState, id: string): Player|undefined {
        let player = boardState.home.players.find(player => player.playerId === id)
        return player ? player : boardState.away.players.find(player => player.playerId === id)
    }
}