import * as React from "react";

import GridImage from "./GridImage";
import Player from "../model/Player";
import GridTile from "./GridTile";

export default class Grid extends React.Component<{players: Player[]}> {
    render(){
        let width=782;
        const tiles:JSX.Element[] = this.props.players.map(player => 
            <GridTile positionAbbrev={player.shorthand} tileSize={width/26} 
            rowIndex={player.coordinate.y} colIndex={player.coordinate.x} key={player.playerId}/>
        );
        /*for (let col =0 ; col<26; col++) {
            for (let row =0 ; row<15; row++) {
         //       tiles.push( <GridTile positionAbbrev="A" tileSize={width/26} rowIndex={row} colIndex={col} /> )
            }
        }*/

        return (
            <div className="grid">
               <GridImage imageSrc="resources/pitch/nice.jpg" elementId="pitchImage2" />
               {tiles}
            </div>
        )
    }
}