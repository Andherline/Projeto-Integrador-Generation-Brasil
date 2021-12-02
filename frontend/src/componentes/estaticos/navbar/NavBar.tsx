import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense" className='cursor'>
                    <Box className='cursor'>
                        <Typography variant="h5" color="inherit">
                            Menu
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar;