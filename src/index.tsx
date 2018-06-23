import * as React from "react";
import * as ReactDom from "react-dom";
import * as $ from 'jquery';

import Grid from "./ts/components/Grid";
import Board from "./ts/components/board/Board";
import ServerCommandProcessor from './ts/ServerCommandProcessor';
import ServerCommandHandlerMap from './ts/handlers/serverCommand/ServerCommandHandlerMap';
import GameState from "./ts/components/board/GameState";
import ModelChangeHandlerMap from './ts/handlers/modelChange/ModelChangeHandlerMap';
import FumbblSocket from './ts/FumbblSocket';

require('./css/grid.scss');


ReactDom.render(
   <Grid />, document.getElementById("entrypoint")
)

$(document).ready( function() {
    let processor: ServerCommandProcessor = new ServerCommandProcessor(new Board({}));
    let socket: FumbblSocket = new FumbblSocket("1005014", (data: any) => {processor.handle(data)})
    ServerCommandHandlerMap.init(new GameState(false))
    ModelChangeHandlerMap.init(socket);
    console.log("Initialization done");
})

