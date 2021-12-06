import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {useHistory } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useDispatch } from "react-redux";
import { addToken } from '../../../store/tokens/actions';
import {toast} from 'react-toastify';

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