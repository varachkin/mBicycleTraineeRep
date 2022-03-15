import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import "./Nav.css"

const buttonNames = [
    {
        title: 'Home',
        to: '/'
    }, {
        title: 'About',
        to: '/about'
    }, {
        title: 'Contacts',
        to: '/contacts'
    },
];

class Nav extends Component {
    render() {
        return (
            <nav className="nav">
                <ul>
                    {buttonNames.map(item => <li><NavLink className="nav_link" to={item.to}
                                                          key={item.title}>{item.title}</NavLink></li>)}
                </ul>
            </nav>
        );
    }
}

export default Nav;