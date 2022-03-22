import React from 'react';
import "./LoginPage.css"
import LoginForm from "./components/LoginForm";
import loginImg from "./../../public/login.png"

import CustomButton from "../CustomButton/CustomButton";

function LoginPage(props) {
    const background = {backgroundImage: loginImg};
    return (
        <>
            <main className="main">
                <section className="section_image section_35vh">
                    <div className="wrapper">
                        <div className="container_padding_200">
                            <h2>Login/Register</h2>
                        </div>
                    </div>
                </section>
                <div className="wrapper form_container">
                    <div className="login_img_block" style={background}>
                        {/*<img src={loginImg} alt="login img" className="login_img"/>*/}
                        <div>skdjgksjd</div>
                    </div>
                    <div className="login_form_block">
                        <h3>LOG IN TO ENTER</h3>
                        <LoginForm/>
                    </div>

                </div>

            </main>
        </>
    );
}

export default LoginPage;