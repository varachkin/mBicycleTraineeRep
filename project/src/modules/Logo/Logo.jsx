import React from 'react';
import "./Logo.css"
import logo from "./../../Public/Logo.png"

function Logo(props) {
    return (
        <div className="header_logo_container">
            <a href="#">
                <img src={logo} alt={props.alt} width="100"/>
            </a>

        </div>
    );
}

export default Logo;