import React from "react";
import Logo from "./components/Logo/Logo";
import Nav from "./components/Nav/Nav";
import "./header.css"

function getOffset(e, el) {
    if (window.scrollY >= 1 && el.style.position === "absolute") {
        el.style.position = "sticky";
        el.style.top = "0";
        console.log(el.children);
        el.children[0].style.maxWidth = "100%";
        el.style.position = "fixed";
    } else if (window.scrollY === 0 && el.style.position === "fixed") {
        el.style.position = "absolute";
        el.style.top = "50px";
        el.children[0].style.maxWidth = "1200px";
    }
}

const Header = () => {
    window.addEventListener('scroll', (e) => {
        getOffset(e, document.querySelector('header'))
    });
    return (
        <>
            <header className="header" style={{position: 'absolute'}}>
                <div className="header_container">
                    <div className="header_block wrapper">
                        <Logo/>
                        <Nav/>
                    </div>
                </div>
            </header>
        </>

    )
};

export default Header;