import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import "./ButtonGroup.css"
import Favourite from "./components/Favourite/Favourite";
import AddToBasketButton from "./components/AddToBasketButton/AddToBasketButton";
import More from "./components/More/More"

export default function DisableElevation() {
    return (
        <ButtonGroup disableElevation variant="contained">
            <AddToBasketButton/>
            <Favourite/>
            <More/>
        </ButtonGroup>
    );
}