import React from "react";
import Tile from "./tile";

export default class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="board">
            <h1>Minesweeper</h1>
            <span>Click to explore a tile.</span>
            <span>Alt + click to flag a tile.</span>
            <div className="grid">
              {this.props.board.grid.map((row, rowIdx) => (
                    <div key={rowIdx} className="row">
                        {row.map((tile, ColIdx) => (
                            <Tile key={ColIdx} updateGame={this.props.updateGame} tile={tile}/>
                        ))}
                    </div>
                ))}
            </div>
          </div>
        );
    }
}