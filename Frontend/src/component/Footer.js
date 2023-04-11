import { Box } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';

const Footer = () => {
    const { palette } = useTheme();
    return (
        <>
            <Box sx={{
                height: '70px',
                bgcolor: palette.secondary.main,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box component='span' sx={{ color: palette.primary.extra }}>Technical Project by Aditya Raj Sahoo</Box>

            </Box>
        </>
    )
}

export default Footer