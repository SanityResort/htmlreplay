import * as React from "react";
import BoardState from '../BoardState';

export default class Board extends React.Component {
    history: BoardState[] = []

    public addState(newState: BoardState) {
        this.history.push(newState);
    }

}