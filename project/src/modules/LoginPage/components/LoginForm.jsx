import * as React from 'react';
import Box from '@mui/material/Box';
import CustomButton from "../../CustomButton/CustomButton";
import PasswordInput from "./PasswordInput/PasswordInput";
import EmailInput from "./EmailInput/EmailInput";
import {useState} from "react";

let emailStatus = false;
let passwordStatus = false;

export default function LoginForm() {
    const [values, setValues] = useState({
        isDisabledButton: true
    });
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
        } else if (type === 'password') {
            passwordStatus = bool;
        }
        setValues({
            ...values, isDisabledButton: handleChangeDisableButton()
        });
    };
    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
            <div>
                <EmailInput changeStatus={(e, type, value) => {
                    handleChangeValidStatus(e, type, value)
                }}/>
                <PasswordInput typeInput="password" changeStatus={(e, type, value) => {
                    handleChangeValidStatus(e, type, value)
                }}/>
                <CustomButton text="LOG IN" isDisabled={values.isDisabledButton}/>
            </div>
        </Box>
    );
}