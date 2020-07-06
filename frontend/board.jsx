import React from "react";
import Tile from "./tile";

export default class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="board">
            {this.props.board.grid.map((row, rowIdx) => {
                return <div key={rowIdx} className="row">
                    {row.map((tile, ColIdx) => {
                        return <Tile
                            key={ColIdx}
                            updateGame={this.props.updateGame}
                            tile={tile}
                        />
                    })}
                </div>
            })}
          </div>
        );
    }
}