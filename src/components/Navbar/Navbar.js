import React, {Component} from 'react';

import './Navbar.css';

import Menu from '../Menu/Menu.js';

class Navbar extends Component{
    render(){
        return(
            <div className="navbar">
                <h2>Logo</h2>
                <Menu/>
            </div>
        )
    }
}

export default Navbar;