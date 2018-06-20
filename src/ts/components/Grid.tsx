import * as React from "react";

import GridImage from "./GridImage";

export default class Grid extends React.Component {
    render(){
        let width=782;
        const tiles:any[] = [];
        for (let col =0 ; col<26; col++) {
            for (let row =0 ; row<15; row++) {
         //       tiles.push( <GridTile positionAbbrev="A" tileSize={width/26} rowIndex={row} colIndex={col} /> )
            }
        }

        return (
            <div className="grid">
               <GridImage imageSrc="resources/pitch/nice.jpg" elementId="pitchImage2" />
               {tiles}
            </div>
        )
    }
}