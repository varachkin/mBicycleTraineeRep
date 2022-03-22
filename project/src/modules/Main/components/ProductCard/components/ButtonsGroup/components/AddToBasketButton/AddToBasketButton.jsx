import * as React from 'react';
import Badge from '@mui/material/Badge';
import {styled} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const StyledBadge = styled(Badge)(({theme}) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

export default function AddToBasketButton() {
    return (
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={0} color="secondary">
                <AddShoppingCartIcon/>
            </StyledBadge>
        </IconButton>
    );
}