import React from 'react'
import Box from '@mui/material/Box'
import { boxStyles } from 'src/styles/custom/Box'


export const CenterAlignBox = ({ children }) => {
    return (
        <Box sx={boxStyles.centerAlign}>{children}</Box>
    )
}
