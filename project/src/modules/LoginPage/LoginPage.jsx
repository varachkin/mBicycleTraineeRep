import React, {useState, Component} from 'react';
import "./LoginPage.css"
import LoginForm from "./components/LoginForm";
import CustomButton from "../CustomButton/CustomButton";
import {createTheme} from "@mui/material/styles";
import {green, orange, red} from "@mui/material/colors";
import PasswordInput from "./components/PasswordInput/PasswordInput";
import EmailInput from "./components/EmailInput/EmailInput";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

let statusEmail = false;
let statusPassword = false;


function LoginPage(props) {

    const [values, setValues] = useState({
        styles: {
            transform: 'perspective(600px) translate(0, -100%) rotateX(45deg)',
            visibility: 'hidden',
            opacity: 0,
        },
    });
    const handleOpen = () => {
        console.log('Opened');
        setValues({
            ...values, styles: {
                transform: 'perspective(600px) translate(0, 0) rotateX(0)',
                visibility: 'visible',
                opacity: 1,
            }
        });
    };
    const handleClose = () => {
        console.log('Closed');
        setValues({
            ...values, styles: {
                transform: 'perspective(600px) translate(0, -100%) rotateX(45deg)',
                visibility: 'hidden',
                opacity: 0,
            }
        });
    };
    return (

        <main className="main">

            <RegistrationForm style={values.styles} isDisabled={values.isDisabled} handleClose={handleClose}/>


            <section className="section_image section_35vh">
                <div className="wrapper">
                    <div className="container_padding_200">
                        <h2 className="white_title">Login/Register</h2>
                    </div>
                </div>
            </section>
            <div className="wrapper form_container">
                <div className="login_img_block">
                    <div className="login_img_block_content">
                        <h2 className="white_title">New to our website?</h2>
                        <p>
                            There are advances being made in science and technology everyday, and a good example of
                            this is the
                        </p>
                        <div onClick={handleOpen}>
                            <CustomButton width="60%" text="CREATE AN ACCOUNT"/>
                        </div>
                    </div>
                </div>
                <div className="login_form_block">
                    <h3>LOG IN TO ENTER</h3>
                    <LoginForm/>
                </div>
            </div>
        </main>

    );
}

export default LoginPage;