import React from 'react';
import {createTheme} from "@mui/material/styles";
import {green, orange, red} from "@mui/material/colors";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import {ThemeProvider} from "@mui/material";

let statusEmail = false;

const EmailInput = (props) => {
    const [values, setValues] = React.useState({
        amount: '',
        email: '',
        weight: '',
        weightRange: '',
        showPassword: false,
        showConfirmPassword: false,
        isDisabled: true,
        emailIsValid: {
            status: false,
            themeInput: createTheme({
                palette: {
                    primary: {
                        main: orange[300],
                    },
                },
            }),
            labelInput: {
                label: "Email",
                isError: false,
            },
        },
    });

    const handleChange = (prop) => (event) => {

        const theme = validateInputField(prop, event);

        setValues(() => ({
            ...values,
            isDisabled: !statusEmail,
            [prop]: event.target.value,
            [`${prop}IsValid`]: theme,
        }));
    };

    const validateInputField = (inputName, event) => {
        const emailRegExp = /^[\w\d]+@[\w]{2,}.[\w]{2,}$/;
        if (emailRegExp.test(event.target.value)) {
            statusEmail = true;
            props.changeStatus(event, inputName, statusEmail, event.target.value);
            return {
                themeInput: createTheme({
                    palette: {
                        primary: {
                            main: green[500],
                        },
                    },
                }),
                labelInput: {
                    label: "Email",
                    isError: false,
                }
            }
        } else {
            statusEmail = false;
            props.changeStatus(event, inputName, statusEmail);
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
        <ThemeProvider theme={values.emailIsValid.themeInput}>
            <FormControl sx={{m: 1, width: '100%'}} variant="outlined">
                <TextField id="demo-helper-text-misaligned-no-helper"
                           label={values.emailIsValid.labelInput.label}
                           onChange={handleChange("email")} error={values.emailIsValid.labelInput.isError}/>
            </FormControl>
        </ThemeProvider>
    );
};

export default EmailInput;