import * as React from "react";
import * as ReactDom from "react-dom";

import {GridImage} from "./components/GridImage";

require('./css/grid.scss');

ReactDom.render(
    <GridImage imageSrc="resources/pitch/nice.jpg" elementId="pitchImage2" />, document.getElementById("entrypoint")
)


