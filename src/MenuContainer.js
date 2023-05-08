import React, {Component} from "react";
import MenuButton from "./MenuButton";
import Menu from "./Menu";

export default class MenuContainer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            visible: true
        }

        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
    }

    handleMouseDown(e){
        this.toggleMenu();

        console.log("Clicked!")
        e.stopPropagation();
    }
    toggleMenu(){
        this.setState({
            visible: !this.state.visible
        });
    }
    render() {
        console.log('Menu Container rendered')
        return([
            <MenuButton handleMouseDown={this.handleMouseDown} />,
            <Menu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>,
            <div>
                <div>
                    <p>Найдешь пункт, который тут лишний?</p>
                    <ul>
                        <li>Lorem</li>
                        <li>Ipsum</li>
                        <li>Dolor</li>
                        <li>Sit</li>
                        <li>Bumblebees</li>
                        <li>Aeneas</li>
                        <li>Consecrate</li>
                    </ul>
                </div>
            </div>
        ])
    }
}