import * as React from "react";
import * as ReactDom from "react-dom";
import * as $ from 'jquery';

import Grid from "./ts/components/Grid";
import Board from "./ts/components/Board";
import FumbblSocket from "./ts/FumbblSocket";
import ServerCommandProcessor from "./ts/handlers/ServerCommandProcessor";

require('./css/grid.scss');


ReactDom.render(
   <Grid />, document.getElementById("entrypoint")
)

$(document).ready( function() {
    let socket: FumbblSocket = new FumbblSocket("1005014", new ServerCommandProcessor(new Board({})));
})

