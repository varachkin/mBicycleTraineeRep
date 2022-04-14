import * as React from 'react';
import Box from '@mui/material/Box';
import ReactDOM from 'react-dom'
import CustomButton from "../../CustomButton/CustomButton";
import Popup from '../../Popup/Popup'
import PasswordInput from "./PasswordInput/PasswordInput";
import EmailInput from "./EmailInput/EmailInput";
import {useState} from "react";
import {signIn} from "../../../utils";


let emailStatus = false;
let passwordStatus = false;
let emailVal = null;
let passVal = null;

export default function LoginForm(props) {
    const [values, setValues] = useState({
        isDisabledButton: true,
        alert:{
            isOpenAlert: false,
            title: null,
            text: null,
        },
    });

    const handleChangeAlert = (e)=> {
        setValues({...values, alert:{...values.alert, isOpenAlert: !values.alert.isOpenAlert, title: `Error ${e.message}`}})
    }
    const handleChangeDisableButton = () => {
        if (emailStatus && passwordStatus) {
            setValues({
                ...values, isDisabledButton: !values.isDisabledButton,
            });
            return false;
        }
        return true;
    };

    const handleChangeValidStatus = (e, type, bool) => {
        if (type === 'email') {
            emailStatus = bool;
            emailVal = e.target.value
        } else if (type === 'password') {
            passwordStatus = bool;
            passVal = e.target.value
        }
        setValues({
            ...values, isDisabledButton: handleChangeDisableButton()
        });
    };
    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
            {ReactDOM.createPortal(
              <Popup isOpen={values.alert.isOpenAlert} title={values.alert.title}
                     text={values.alert.text}
                     closeAlert={handleChangeAlert}/>,
              document.getElementById('modal-root'))}
            <div>
                <EmailInput changeStatus={(e, type, value) => {
                    handleChangeValidStatus(e, type, value)
                }}/>
                <PasswordInput typeInput="password" changeStatus={(e, type, value) => {
                    handleChangeValidStatus(e, type, value)
                }}/>
                <div onClick={() => signIn(emailVal, passVal, handleChangeAlert)}>
                    <CustomButton text="LOG IN" isDisabled={values.isDisabledButton}/>
                </div>
            </div>
        </Box>
    );
}