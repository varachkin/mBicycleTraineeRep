import React, {useState} from 'react';
import EmailInput from "../LoginPage/components/EmailInput/EmailInput";
import PasswordInput from "../LoginPage/components/PasswordInput/PasswordInput";
import CustomButton from "../CustomButton/CustomButton";
import CloseIcon from '@mui/icons-material/Close';
import "./RegistrationForm.css"
import {signUp} from "../../utils";
import ReactDOM from "react-dom";
import Popup from "../Popup/Popup";

let emailStatus = false;
let passwordStatus = false;
let confirmPasswordStatus = false;
let emailValue = null;
let passValue = null;
let confPassValue = null;

const RegistrationForm = (props) => {
    const [values, setValues] = useState({
        isDisabledButton: true,
        alert: {
            isOpenAlert: true,
            title: null,
            text: null,
        }
    });

    const handleChangeAlert = (e)=> {
        setValues({...values,
            alert:{
                ...values.alert,
                isOpenAlert: !values.alert.isOpenAlert,
                title: `Error ${e.message}`
            }
        })
    }

    const handleChangeDisableButton = () => {
        if (emailStatus && passwordStatus && confirmPasswordStatus && passValue === confPassValue) {
            setValues({
                ...values, isDisabledButton: !values.isDisabledButton,
            });
            return false;
        }
        return true;
    };
    const handleChangeValidStatus = (e, type, bool, val) => {

        if (type === 'email') {
            emailStatus = bool;
            emailValue = val;
        } else if (type === 'password') {
            passValue = val;
            passwordStatus = bool;
        } else if (type === 'confirmPassword') {
            confPassValue = val;
            confirmPasswordStatus = bool;
        }

        setValues({
            ...values, isDisabledButton: handleChangeDisableButton()
        });
    };
    return (
        <>
            <div className="registration_block"
                 style={{visibility: props.style.visibility, opacity: props.style.opacity}}>
                <form className="registration_content"
                      style={{transform: props.style.transform, opacity: props.style.opacity}}>
                    <div className="close">
                        <CloseIcon onClick={props.handleClose}/>
                    </div>
                    <h2 className="black_title">Registration</h2>
                    <p>
                        <EmailInput changeStatus={(e, type, bool, value) => {
                            handleChangeValidStatus(e, type, bool, value)
                        }}/>
                        <PasswordInput typeInput="password" changeStatus={(e, type, bool, value) => {
                            handleChangeValidStatus(e, type, bool, value)
                        }}/>
                        <PasswordInput typeInput="confirmPassword" changeStatus={(e, type, bool, value) => {
                            handleChangeValidStatus(e, type, bool, value)
                        }}/>
                    </p>
                    <div>
                        <CustomButton text="Registration" isDisabled={values.isDisabledButton} handler={() => {
                            signUp(emailValue, passValue)}} />
                    </div>
                </form>
            </div>
        </>

    );
};

export default RegistrationForm;
