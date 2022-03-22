import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import "./Nav.css";
import {v4 as uuidv4} from 'uuid';
import Cart from "./components/Cart/Cart";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {grey, orange} from "@mui/material/colors";
import Button from "@mui/material/Button";


const themeGray = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: grey[700],
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#f09800',
        },
    },
});
const themeOrange = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: orange[700],
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#f09800',
        },
    },
});

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrButtons: [
                {
                    title: 'Home',
                    to: '/',
                    isActive: true,
                },
                {
                    title: 'About',
                    to: '/about',
                    isActive: false,
                },
                {
                    title: 'Contacts',
                    to: '/contacts',
                    isActive: false,
                },
                {
                    title: 'Favourite',
                    to: '/favourite',
                    isActive: false,
                },
                {
                    title: 'LogIn',
                    to: '/login',
                    isActive: false,
                },
            ]
        };
        this.changeColorHandler = this.changeColorHandler.bind(this)
    }

    changeColorHandler(e) {
        let arr = this.state.arrButtons.map(i => {
            if (i.title === e.target.textContent) {
                i.isActive = true;
                return i;
            } else {
                i.isActive = false;
                return i;
            }
        });
        setTimeout(() => {
            this.setState({arr})
        }, 250);
    }


    render() {
        return (
            <nav className="nav">
                <ul>
                    {this.state.arrButtons.map(item => <li key={uuidv4(`${item}`)}><NavLink className="nav_link"
                                                                                            to={item.to}
                                                                                            key={item.title}>{(item.title === 'LogIn') ?
                        <ThemeProvider theme={themeGray}>
                            <Button variant="contained"
                                    onClick={this.changeColorHandler}>{item.title}</Button>
                        </ThemeProvider> : (item.isActive) ? <ThemeProvider theme={themeOrange}>
                            <Button
                                onClick={this.changeColorHandler}>{item.title}</Button>
                        </ThemeProvider> : <ThemeProvider theme={themeGray}>
                            <Button
                                onClick={this.changeColorHandler}>{item.title}</Button>
                        </ThemeProvider>}</NavLink>
                    </li>)}
                </ul>
                <Cart/>
            </nav>
        );
    }
}

export default Nav;