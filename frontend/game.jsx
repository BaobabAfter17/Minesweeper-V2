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
        this.restartGame = this.restartGame.bind(this);
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
    }

    restartGame(e) {
        const newBoard = new Minesweeper.Board(10, 10);
        document.getElementById("modal").setAttribute("class", "modal");
        this.setState({ board: newBoard });
    }

    modal() {
        let info = "";
        let klass = "modal";
        if (this.state.board.won()) {
            info = "You win!";
            klass += " is-active";
        }
        if (this.state.board.lost()) {
            info = "You lose!";
            klass += " is-active";
        }
        return (
            <div id="modal" className={klass}>
            <div className="modal-content">
                <span>{info}</span>
                <button onClick={this.restartGame}>Play again!</button>
            </div>
            <div className="modal-screen"></div>
            </div>
        );
    }

    render() {
        return (
          <div className="game">
            {this.modal()}
            <Board board={this.state.board} updateGame={this.updateGame} />
          </div>
        );
    }
}