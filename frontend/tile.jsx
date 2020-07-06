import React from "react";

export default class Tile extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const revealing = e.altKey ? false : true;
        this.props.updateGame(this, revealing);
    }

    render() {
        let text = "";
        let klass = "";
        if (this.props.tile.explored) {
            if (this.props.tile.flagged) {
                text = "F";
                klass = " flagged";
            } else {
                if (this.props.bombed) {
                    text = "B";
                    klass = " bombed";
                } else {
                    const count = this.props.tile.adjacentBombCount();
                    text = count === 0 ? "" : count;
                    klass = " revealed";
                }
            }
        } else {
            text = "";
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