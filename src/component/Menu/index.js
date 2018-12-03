import React, { Component } from 'react';
import MenuList from './menu.json';
import './index.scss';
import './index.css';

class Menu extends Component {
    constructor (props) {
        super(props);
        this.state = {};
        this.getMenu = this.getMenu;
    }
    componentWillMount() {
    }
    componentDidMount() {
    }
    getMenu(MenuLists) {
        if (MenuLists === null) { return " "; }
        return (
            <ul className="">
                { MenuLists.map(item => {
                    return (
                        <li className="Nav">
                            <a className={ item.level === 1 ? "NavA" : "NavB" }>{ item.menuName }</a>
                            {/* <a style={{background:(item.level===1)?"#1f61f6;":""}}>{item.menuName}</a>不能加分号样式的尾部*/ }
                            { this.getMenu(item.childMenus) }
                        </li>
                    );
                }) }
            </ul>
        );
    }
    render() {
        return (
            <div className="Menu">
                { this.getMenu(MenuList.menu) }
            </div>
        );
    }
}

export default Menu;
