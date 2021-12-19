import React, { ChangeEvent, useEffect ,useState} from 'react';
import { Grid, Button, Box, Typography, TextField, Avatar } from '@material-ui/core';
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons';
import useLocalStorage from 'react-use-localstorage';
import { Link, useHistory } from 'react-router-dom';
import { addToken } from "../../store/tokens/actions";
import { toast } from 'react-toastify';
import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
import './Login.css';
import { useDispatch } from 'react-redux';


function Login() {
    let history = useHistory();
    const dispatch = useDispatch();
    const [token, setToken] = useState("");
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: "",
            senha: "",
            token: ""
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != "") {
            dispatch(addToken(token))
            history.push("/home")
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login("/usuarios/logar", userLogin, setToken)

            toast.success("Usuario logado com sucesso!!!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } catch (error) {
            toast.error("Dados do inconsistentes, erro ao logar.!!!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
    }
    return (
        <Grid container className="background">
            <Grid item xs={12}>

                <Box display="flex" justifyContent="center" alignItems="center" height="80vh" >
                    <Box className="card" width={350} height="70vh" borderRadius={5} marginTop={12} display="flex" justifyContent="center" alignItems="center">
                        <Box >
                            <Box display="flex" justifyContent="center" alignItems="center" marginBottom={2}>
                                <Avatar className='icon'>
                                    <LockOutlinedIcon />
                                </Avatar>
                            </Box>

                            <Typography gutterBottom className="teste">
                                Login
                            </Typography>
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <form onSubmit={onSubmit}>

                                    <Box marginY={1}>
                                    <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                                    </Box>

                                    <Box marginY={1}>
                                    <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                                    </Box>

                                    <Box display="flex" justifyContent="center" alignItems="center">
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            className='botao'
                                        >
                                            Entrar
                                        </Button>
                                    </Box>

                                </form>
                            </Box>
                            <Box display='flex' justifyContent='center' marginTop={2}>
                                <Box marginRight={1}>
                                    <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                                </Box>
                                <Link to='/cadastrousuario'>
                                    <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                                </Link>

                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Grid>

        </Grid >
    )
}

export default Login
