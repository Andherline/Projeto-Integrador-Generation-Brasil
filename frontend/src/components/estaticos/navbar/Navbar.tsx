import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useDispatch } from "react-redux";
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';

function NavBar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense" className='cursor'>
                    <Box className='cursor'>

                        <Box display="flex" justifyContent="start" alignItems="center">
                            <Link to='/home' className="text-decorator-none">
                                <Typography variant="h5" color="inherit" >
                                    <img src="https://imgur.com/hVavFPA.png" alt="logo" className="logo" />
                                </Typography>
                            </Link>
                            <Link to='/home' className="text-decorator-none">
                                <Box mx={2} style={{ cursor: "pointer" }} marginLeft={10}>
                                    <Typography variant="h6" color="inherit">
                                        home
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to='/categoria' className="text-decorator-none">
                                <Box mx={1} style={{ cursor: "pointer" }}>
                                    <Typography variant="h6" color="inherit">
                                        Categoria
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to='/produto' className="text-decorator-none">
                                <Box mx={1} style={{ cursor: "pointer" }}>
                                    <Typography variant="h6" color="inherit">
                                        Produtos
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to='/cadastrarproduto' className="text-decorator-none">
                                <Box mx={1} style={{ cursor: "pointer" }}>
                                    <Typography variant="h6" color="inherit">
                                        cadastrar produto
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to='/login' className="text-decorator-none">
                                <Box mx={1} style={{ cursor: "pointer" }} marginLeft={80}>
                                    <Typography variant="h6" color="inherit">
                                        logout
                                    </Typography>
                                </Box>
                            </Link>
                        </Box>

                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar;