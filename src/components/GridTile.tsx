import * as React from "react";

export class GridTile extends React.Component<{positionAbbrev:string, tileSize: number, 
    rowIndex: number, colIndex: number}> {


    render(){
        let tileStyle: React.CSSProperties = {
            height: this.props.tileSize+'px',
            width: this.props.tileSize+'px',
            lineHeight: this.props.tileSize+'px',
            top: Math.ceil(this.props.rowIndex * this.props.tileSize)+'px',
            left: Math.ceil(this.props.colIndex * this.props.tileSize)+'px'
    
        };
        return(
            <div className="gridTile" style={tileStyle}>{this.props.positionAbbrev} </div>
        )
    }

}