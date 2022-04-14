import React, {useState} from 'react';
import CloseIcon from "@mui/icons-material/Close";
import CustomButton from "../CustomButton/CustomButton";
import "./InfoPopup.css"

const InfoPopup = (props) => {
    const [values, setValues] = useState({
        styles: {
            view: {
                block: {
                    visibility: 'visible',
                    opacity: 1,
                },
                content: {
                    transform: 'perspective(600px) translate(0, 0) rotateX(0)',
                    opacity: 1,
                }
            },
            close: {
                block: {
                    visibility: 'hidden',
                    opacity: 0,
                },
                content: {
                    transform: 'perspective(600px) translate(0, -150%) rotateX(45deg)',
                    opacity: 0,
                }
            }
        },
    });

    const handleView = () => {
        console.log('Closed');
        setValues({
            ...values, styles: {
                block: {
                    visibility: 'visible',
                    opacity: 1,
                },
                content: {
                    transform: 'perspective(600px) translate(0, 0) rotateX(0)',
                    opacity: 1,
                }
            }
        });
    };

    const handleClose = () => {
        console.log('Closed');
        setValues({
            ...values, styles: {
                view: {
                    block: {
                        visibility: 'visible',
                        opacity: 1,
                    },
                    content: {
                        transform: 'perspective(600px) translate(0, 0) rotateX(0)',
                        opacity: 1,
                    }
                },
                close: {
                    block: {
                        visibility: 'hidden',
                        opacity: 0,
                    },
                    content: {
                        transform: 'perspective(600px) translate(0, -150%) rotateX(45deg)',
                        opacity: 0,
                    }
                }

            }
        });
    };
    return (
        <div className="popup_block" style={(props.data.view) ? values.styles.view.block : values.styles.close.block}>
            <div className="popup_content"
                 style={(props.data.view) ? values.styles.view.content : values.styles.close.content}>
                <div className="close">
                    <CloseIcon onClick={handleClose}/>
                </div>
                <h2 className="black_title">{props.data.title}</h2>
                <p>
                    {props.data.text}
                </p>
                <div className="popup_button_block" onClick={handleClose}>
                    <CustomButton text="OK"/>
                </div>

            </div>
        </div>
    );
};

export default InfoPopup;