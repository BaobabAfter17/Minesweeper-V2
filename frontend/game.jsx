import React from "react";
import Board from "./board";
import * as Minesweeper from "./minesweeper";

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            board: new Minesweeper.Board(10, 10)
        }

        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(tile, revealing) {
        if (revealing) {
            tile.explore();
        } else {
            tile.toggleFlag();
        }
        
        this.setState({
            board: this.state.board
        });

        if (this.state.board.won()) {
          alert("Yeah, you win!");
        }
        if (this.state.board.lost()) {
          alert("Uhuh, you lose...");
        }
    }

    render() {
        return (
            <Board
                board={this.state.board}
                updateGame={this.updateGame}
            />
        )
    }
}