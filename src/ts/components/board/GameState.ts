import BoardState from './BoardState';

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
    }

    copyLatestState(): BoardState {
        let length: number = this.history.length
        return this.history.length ? {...this.history[length - 1 ]} : new BoardState();
    }

}