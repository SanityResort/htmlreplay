import * as React from "react";
import * as ReactDom from "react-dom";
import * as $ from 'jquery';

import Board from "./ts/components/board/Board";
import ServerCommandProcessor from './ts/ServerCommandProcessor';
import ServerCommandHandlerMap from './ts/handlers/serverCommand/ServerCommandHandlerMap';
import GameState from "./ts/components/board/GameState";
import ModelChangeHandlerMap from './ts/handlers/modelChange/ModelChangeHandlerMap';
import FumbblSocket from './ts/FumbblSocket';

require('./css/grid.scss');

let gameState: GameState = new GameState(false);

ReactDom.render(
    <Board gameState={gameState} />, document.getElementById("entrypoint")
 )
 
$(document).ready( function() {
    let processor: ServerCommandProcessor = new ServerCommandProcessor();
    let socket: FumbblSocket = new FumbblSocket("1005014", (data: any) => {processor.handle(data)})
    ServerCommandHandlerMap.init(gameState)
    ModelChangeHandlerMap.init(socket);
    console.log("Initialization done");
})

