import React, {useEffect, useState} from "react";
import Logo from "./components/Logo/Logo";
import Nav from "./components/Nav/Nav";
import "./header.css"

function getOffset(e, el, updateState, isScroll) {
    // e.stopPropagation(false);
    // const rect = el.getBoundingClientRect();
    // console.log(rect.top - window.scrollY);
    // console.log(window.scrollY);
    // console.log(rect.top);
    // console.log(el);
    // if (window.scrollY > 0 && isScroll.classHeader === 'header_absolute') {
    //     console.log(window.scrollY);
    //     updateState({classHeader: 'header_fixed'})
    // } else if (window.scrollY === 0 && isScroll.classHeader === 'header_fixed') {
    //     console.log('else');
    //     updateState({classHeader: 'header_absolute'})
    // }
}

const Header = () => {
    // const [isScroll, setIsScroll] = useState({classHeader: 'header_absolute'});
    // window.addEventListener('scroll', (e) => {
    //     getOffset(e, document.querySelector('header'), setIsScroll, isScroll)
    // });
    return (
        <header className="header">
            <div className="header_container">
                <div className="header_block wrapper">
                    <Logo/>
                    <Nav/>
                </div>
            </div>
        </header>
    )
};

export default Header;