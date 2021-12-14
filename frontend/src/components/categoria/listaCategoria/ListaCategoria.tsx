import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import useLocalStorage from 'react-use-localstorage';
import { useHistory } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import {busca} from '../../../services/Service';

function CadastroCategoria() {
    const [categoria, setCategoria] = useState<Categoria[]>([])
    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();

    useEffect(() => {
        if (token == '') {
            alert("Você precisa estar logado")
            history.push("/login")
        }
    }, [token])


    async function getCategoria() {
        await busca("/categorias", setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }


    useEffect(() => {
        getCategoria()
    }, [categoria.length])

    return (
        <>
            {
                categoria.map(categoria => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Categoria
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {categoria.tipo}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5} >
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>
    );
}


export default CadastroCategoria;