import React, {PureComponent} from "react";
import "./MenuButton.css";

export default class MenuButton extends PureComponent{
    render() {
        console.log('Menu Button rendered');
        return (
            <button id="roundButton"
                    onMouseDown={this.props.handleMouseDown}>
            </button>
        );
    }
}