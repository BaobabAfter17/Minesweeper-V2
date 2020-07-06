import React from "react";

export default class Tile extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const revealing = e.altKey ? false : true;
        const tile = this.props.tile;
        this.props.updateGame(tile, revealing);
    }

    render() {
        let text = "";
        let klass = "";
        const tile = this.props.tile;
            if (tile.flagged) {
                text = "\u2691";
                klass = " flagged";
            } else {
                if (tile.explored) {
                    if (tile.bombed) {
                        text = "\u2620";
                        klass = " bombed";
                    } else {
                        const count = tile.adjacentBombCount();
                        text = count === 0 ? "" : count;
                        klass = " revealed";
                    }
                } else {
                    text = "";
                }
            }

        return (
            <div
                className={"tile" + klass}
                onClick={this.handleClick}>
                {text}
            </div>
        );
    }
}