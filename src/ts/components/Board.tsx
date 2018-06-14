import * as React from "react";
import BoardState from '../BoardState';

export class Board extends React.Component {
    history: BoardState[] = []

    public addState(newState: BoardState) {
        this.history.push(newState);
    }

}