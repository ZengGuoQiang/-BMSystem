import React, { Component } from 'react';
import './App.scss';

// 页面的路径
import Home from './component/Home/index.js';
import Menu from './component/Menu/index.js';
import Product from './component/Product/index.js';
import User from './component/User/index.js';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Home></Home>
                <Menu className="app-menu"></Menu>
                <Product className="app-product"></Product>
                <User className="app-user"></User>
            </div>
        );
    }
}

export default App;
