import React, { Component } from 'react';
import MenuList from './menu.json';
import $ from 'jquery';
import './menu.scss';
import { hidden } from 'ansi-colors';
// import './index.css';

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
    a(e) {
        let node = $(e.target);
        let nextNode = node.next();
        let parentNode = node.parent();
        nextNode.css('display', 'block');
        parentNode.siblings().children('ul').css('display', 'none');
        e.preventDefault();
        console.log(nextNode);
        console.log(this, e);
    }
    getMenu(MenuLists) {
        if (MenuLists === null) { return " "; }
        return (
            <ul className="Navul">
                { MenuLists.map(item => {
                    return (
                        <li className="Nav" key={ item.id }>
                            <a className={ item.level === 1 ? "NavA" : "NavB" } onClick={ this.a.bind(this) } > { item.menuName }</a>
                            {/* <a style={{background:(item.level===1)?"#1f61f6;":""}}>{item.menuName}</a>不能加分号样式的尾部*/ }
                            { this.getMenu(item.childMenus) }
                        </li>
                    );
                })
                }
            </ul >
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
