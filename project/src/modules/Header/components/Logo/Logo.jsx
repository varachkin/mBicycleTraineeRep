import React from 'react';
import "./Logo.css"
import logo from "../../../../public/logo.png"

function Logo(props) {
    return (
        <div className="header_logo_container">
            <a href="#">
                <img src={logo} alt={props.alt} width="100"/>
                <span>SHOP</span>
            </a>

        </div>
    );
}

export default Logo;