import BoardState from './BoardState';
import * as $ from 'jquery';

export default class GameState {
    history: BoardState[] = []
    historyIndex: number = 0;
    realTime: boolean

    constructor(realTime: boolean) {
        this.realTime = realTime;
    }

    addState(newState: BoardState) {
        this.history.push(newState);
        if (this.realTime) {
            this.historyIndex = this.history.length - 1
        }
        console.log("Added state, length is now: " + this.history.length)
    }

    copyLatestState(): BoardState {
        let length: number = this.history.length
        if (this.history.length > 0) {
            return JSON.parse(JSON.stringify(this.history[length-1]))
        } else {
            return new BoardState();
        }
    }

}