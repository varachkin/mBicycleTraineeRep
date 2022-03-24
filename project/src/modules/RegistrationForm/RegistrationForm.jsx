import React, {useState} from 'react';
import EmailInput from "../LoginPage/components/EmailInput/EmailInput";
import PasswordInput from "../LoginPage/components/PasswordInput/PasswordInput";
import CustomButton from "../CustomButton/CustomButton";
import CloseIcon from '@mui/icons-material/Close';
import "./RegistrationForm.css"

let emailStatus = false;
let passwordStatus = false;
let confirmPasswordStatus = false;
let passValue = null;
let confPassValue = null;
const RegistrationForm = (props) => {
    const [values, setValues] = useState({
        isDisabledButton: true,
    });
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
        } else if (type === 'password') {
            passValue = val;
            passwordStatus = bool;
        } else if (type === 'confirmPassword') {
            confPassValue = val;
            confirmPasswordStatus = bool;
        }
        console.log(passValue);
        console.log(confPassValue);
        setValues({
            ...values, isDisabledButton: handleChangeDisableButton()
        });
    };
    return (
        <div className="registration_block"
             style={{visibility: props.style.visibility, opacity: props.style.opacity}}>
            <div className="registration_content"
                 style={{transform: props.style.transform, opacity: props.style.opacity}}>
                <div className="close">
                    <CloseIcon onClick={props.handleClose}/>
                </div>
                <h2 className="black_title">Registration</h2>
                <p>
                    <EmailInput changeStatus={(e, type, value) => {
                        handleChangeValidStatus(e, type, value)
                    }}/>
                    <PasswordInput typeInput="password" changeStatus={(e, type, bool, value) => {
                        handleChangeValidStatus(e, type, bool, value)
                    }}/>
                    <PasswordInput typeInput="confirmPassword" changeStatus={(e, type, bool, value) => {
                        handleChangeValidStatus(e, type, bool, value)
                    }}/>
                </p>
                <CustomButton text="Registration" isDisabled={values.isDisabledButton}/>
            </div>
        </div>
    );
};

export default RegistrationForm;