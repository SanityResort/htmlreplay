import * as React from "react";
import GameState from './GameState';
import Grid from "../Grid";
import BoardState from './BoardState';
import BoardStateUtil from '../../util/BoardStateUtil';
import Player from '../../model/Player';

export default class Board extends React.Component<{gameState: GameState},{gameState: GameState}> {
    
    constructor(props: any) {
        super(props)
        this.state = {
            gameState: props.gameState
        }
    }

    nextFrame(){
        let newState={...this.state}
        newState.gameState.historyIndex++
        this.setState(newState)
    }

    render(){
        let boardState: BoardState = this.state.gameState.history[this.state.gameState.historyIndex]
        let players: Player[] = boardState ? BoardStateUtil.playersOnPitch(boardState): []

        return (
            <div className="gridParent">
            <Grid players={players}/>
            <div className="gridButton"  onClick={() => this.nextFrame()}>+</div>
            <div>-</div>
            </div>
        )
    }
}