import * as React from "react";
import * as ReactDom from "react-dom";
import * as $ from 'jquery';

import {Grid} from "./components/Grid";

import {FumbblSocket} from "./FumbblSocket";

require('./css/grid.scss');


ReactDom.render(
   <Grid />, document.getElementById("entrypoint")
)

$(document).ready( function() {
    let socket: FumbblSocket = new FumbblSocket("1005014");
})

