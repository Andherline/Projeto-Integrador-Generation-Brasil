import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import useLocalStorage from 'react-use-localstorage';
import { useHistory } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function ListaCategoria() {
    const [categoria, setCategoria] = useState<Categoria[]>([])
    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

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
                                <Box display="flex" justifyContent="center" mb={1.5}>

                                    <Link to={`/cadastrarcategorias/${categoria.id}`} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' style={{backgroundColor:'#5F7316', color:'white'}}  >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarcategorias/${categoria.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' style={{backgroundColor:'white', color:'#5F7316',border:'1px solid #C9E265',borderColor: '#5F7316'}}>
                                                deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>
    )
}

export default ListaCategoria;