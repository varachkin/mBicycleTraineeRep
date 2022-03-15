import React from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import "./header.css"

const Header = () => {
    return (
        <header className="header">
            <div className="wrapper">
                <Logo/>
                <Nav/>
            </div>
        </header>
    )
};

export default Header;