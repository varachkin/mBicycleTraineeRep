import React from 'react';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import {ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {green, orange, red} from "@mui/material/colors";

let statusPassword = false;
const PasswordInput = (props) => {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
        passwordIsValid: {
            status: false,
            themeInput: createTheme({
                palette: {
                    primary: {
                        main: orange[300],
                    },
                },
            }),
            labelInput: {
                label: props.typeInput.toLowerCase() === 'password' ? 'Password' : "Confirm password",
                isError: false,
            },
        },
    });
    const handleChange = (prop) => (event) => {
        console.log(prop);
        const theme = validateInputField(prop, event);

        setValues(() => ({
            ...values,
            isDisabled: !statusPassword,
            [prop]: event.target.value,
            [`${prop}IsValid`]: theme,
        }));
        console.log(props.labelError)
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const validateInputField = (inputName, event) => {
        const passRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

        if (passRegExp.test(event.target.value)) {
            statusPassword = true;
            props.changeStatus(event, props.typeInput.toLowerCase() === 'password' ? 'password' : "confirmPassword", statusPassword, event.target.value);
            return {
                themeInput: createTheme({
                    palette: {
                        primary: {
                            main: green[500],
                        },
                    },
                }),
                labelInput: {
                    label: props.typeInput.toLowerCase() === 'password' ? 'Password' : "Confirm password",
                    isError: false,
                }
            }
        } else {
            statusPassword = false;
            props.changeStatus(event, props.typeInput.toLowerCase() === 'password' ? 'password' : "confirmPassword", statusPassword, event.target.value);
            return {
                themeInput: createTheme({
                    palette: {
                        primary: {
                            main: red[500],
                        },
                    },
                }),
                labelInput: {
                    label: "Not valid",
                    isError: true,
                }
            }
        }

    };
    return (
        <ThemeProvider theme={values.passwordIsValid.themeInput}>
            <FormControl sx={{m: 1, width: '100%'}} variant="outlined">
                <InputLabel
                    htmlFor="outlined-adornment-password">{values.passwordIsValid.labelInput.label}</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                            </IconButton>
                        </InputAdornment>
                    }
                    label={values.passwordIsValid.labelInput.label} error={values.passwordIsValid.labelInput.isError}
                />
            </FormControl>
        </ThemeProvider>
    );
};

export default PasswordInput;