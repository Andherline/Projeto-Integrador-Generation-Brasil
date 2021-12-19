import React, { useState, useEffect, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { Grid, Box, Typography, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons';
import './Cadastro.css';
import { toast } from 'react-toastify';


function CadastroUsuario() {

    let history = useHistory();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            history.push("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            toast.success('Usuario cadastrado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            toast.error('Dados inconsistentes. Favor verificar as informações de cadastro.', {
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
                                Cadastro
                            </Typography>
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <form onSubmit={onSubmit}>

                                    <Box marginY={1}>
                                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                                    </Box>

                                    <Box marginY={1}>
                                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                                    </Box>

                                    <Box marginY={1}>
                                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                                    </Box>

                                    <Box marginY={1}>
                                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                                    </Box>

                                    <Box display="flex" justifyContent="center" alignItems="center" >
                                        <Link to='/login' className='text-decorator-none'>
                                            <Button variant='contained' type='submit' className='botao'>
                                                Cadastrar
                                            </Button>
                                        </Link>
                                    </Box>

                                </form>
                            </Box>
                            <Box display='flex' justifyContent='center' marginTop={2}>
                                <Box marginRight={1}>
                                    <Typography variant='subtitle1' gutterBottom align='center'>Ja tem uma conta?</Typography>
                                </Box>
                                <Link to='/login'>
                                    <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>fazer login</Typography>
                                </Link>
                                <Box marginTop={2} textAlign='center'>
                                </Box>

                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Grid>

        </Grid >
    );
}

export default CadastroUsuario;