import { Box, styled } from '@mui/material'
import React from 'react'
import headerImage from '../images/Seikojobs.png';
import SearchInputEl from './SearchInputEl';

const Header = () => {

    const StyleHeader = styled(Box)(({ theme }) => (
        {
            display: "flex",
            justifyContent: 'center',
            alignItems: 'Top',
            minHeight: 300,
            backgroundImage: `url(${headerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: theme.palette.secondary.main
        }

    ));
    return (
        <>
            <StyleHeader >
                <SearchInputEl />
            </StyleHeader>
        </>
    )
}

export default Header