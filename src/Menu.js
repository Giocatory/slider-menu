import React, {PureComponent} from "react";
import "./Menu.css";

export default class Menu extends PureComponent{
    render() {
        console.log('Menu rendered');
        let visibility = "hide";

        if (this.props.menuVisibility){
            visibility = "show";
        }

        return(
            <div id="flyoutMenu"
                 onMouseDown={this.props.handleMouseDown}
                 className={visibility}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <h2><a href="#">Main</a></h2>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <h2><a href="#">About</a></h2>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <h2><a href="#">Contact</a></h2>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <h2><a href="#">Search</a></h2>
            </div>
        )
    }
}