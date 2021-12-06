import React from 'react';
import { Grid, Button, Box, Typography, TextField } from '@material-ui/core';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <Grid container className="background">
            <Grid item xs={12}>

                <Box display="flex" justifyContent="center" alignItems="center" height="80vh" >
                    <Box className="card" width={350} height="70vh" borderRadius={5} marginTop={12} display="flex" justifyContent="center" alignItems="center">
                        <Box >

                            <Box display="flex" justifyContent="center" alignItems="center">
                                <form >

                                    <Box marginY={1}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Usurio"
                                            name="email"
                                            autoComplete="email"
                                            autoFocus
                                        />
                                    </Box>

                                    <Box marginY={1}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Senha"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                        />
                                    </Box>

                                    <Box display="flex" justifyContent="center" alignItems="center">
                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                color='secondary'
                                            >
                                                Entrar
                                            </Button>
                                            <Link to='/cadastrousuario' className='text-decorator-none'>
                                                <Button variant='contained' className='btnCancelar'>
                                                    fazer login
                                                </Button>
                                            </Link>
                                            
                                    </Box>

                                </form>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Grid>

        </Grid >
    )
}

export default Login