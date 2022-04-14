import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog(props) {
    return (
        <Dialog
            open={props.isOpen}
            onClose={props.closeAlert}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title" style={{color: "black"}}>
                {props.title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {props.text}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={props.closeAlert} autoFocus>
                    {props.btnText}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
