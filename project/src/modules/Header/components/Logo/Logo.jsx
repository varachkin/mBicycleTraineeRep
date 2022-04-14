import React from 'react';
import "./Logo.css"
import { NavLink } from 'react-router-dom'
import logo from "../../../../public/logo.png"

function Logo(props) {
    return (
        <div className="header_logo_container">
            <NavLink to="/">
                <img src={logo} alt={props.alt}/>
                <span>SHOP</span>
            </NavLink>

        </div>
    );
}

export default Logo;