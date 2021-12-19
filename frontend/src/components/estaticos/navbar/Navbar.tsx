import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';

function NavBar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history.push('/login')
    }

    var navbarComponent;


    if (token != "") {
        navbarComponent = <AppBar position="static">
            <Toolbar variant="dense" className='cursor'>
                <Box className='cursor'>
                    <Typography variant="h5" color="inherit">

                    </Typography>
                </Box>

                <Box display="flex" justifyContent="start" alignItems="center">
                    <Link to='/home' className="text-decorator-none">
                        <Typography variant="h5" color="inherit" >
                            <img src="https://imgur.com/hVavFPA.png" alt="logo" className="logo" />
                        </Typography>
                    </Link>
                    <Link to='/home' className="text-decorator-none">
                        <Box mx={2} style={{ cursor: "pointer" }} marginLeft={10}>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                    </Link>
                    <Link to='/categorias' className="text-decorator-none">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Categoria
                            </Typography>
                        </Box>
                    </Link>
                    <Link to='/produtos' className="text-decorator-none">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Produtos
                            </Typography>
                        </Box>
                    </Link>
                    <Link to='/cadastrarproduto' className="text-decorator-none">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Cadastrar Produto
                            </Typography>
                        </Box>
                    </Link>
                    <Link to='/cadastrarcategorias' className="text-decorator-none">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Cadastrar Categoria
                            </Typography>
                        </Box>
                    </Link>

                    <Box mx={1} style={{ cursor: "pointer" }} onClick={goLogout}>
                        <Typography variant="h6" color="inherit">
                            logout
                        </Typography>
                    </Box>

                </Box>
            </Toolbar>
        </AppBar>
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default NavBar;