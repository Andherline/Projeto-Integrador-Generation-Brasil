import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto';
import { busca } from '../../../services/Service'
import { Box, Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import './ListaProduto.css';
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';


function ListaProduto() {
    const [produtos, setProdutos] = useState<Produto[]>([])
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

    async function getProduto() {
        await busca("/produtos", setProdutos, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getProduto()

    }, [produtos.length])

    return (
        <>
            <Box display="flex" justifyContent="center" flexWrap="wrap">
                {
                    produtos.map(produto => (
                        <Box border={1} marginY={5} marginX={2} padding={2}
                            className="card-produto">
                            <Box className='caixa-produto' display='flex' justifyContent='center'>
                                <img src={produto.foto} width="100%" alt="" className='img-produto' />
                            </Box>
                            <Box justifyContent='center'>
                                <Typography variant="h5" color="initial" align='center'>{produto.nome}</Typography>
                                <Typography variant="h5" color="initial" align='center'>{produto.descricao}</Typography>
                                <Typography variant="h5" color="initial" align='center'>R$ {produto.preco}</Typography>
                                <Typography variant="h5" color="initial" align='center'>{produto.categoria?.palavrachave}</Typography>
                            </Box>
                            <Box display="flex" justifyContent="center" mb={1.5}>

                                <Link to={`/cadastrarproduto/${produto.id}`} className="text-decorator-none" >
                                    <Box mx={1}>
                                        <Button variant="contained" size='small' style={{ backgroundColor: '#5F7316', color: 'white' ,marginTop:'10px'}}>
                                            atualizar
                                        </Button>
                                    </Box>
                                </Link>
                                <Link to={`/deletarproduto/${produto.id}`} className="text-decorator-none">
                                    <Box mx={1}>
                                        <Button variant="contained" size='small' style={{ backgroundColor: 'white', color: '#5F7316', border: '1px solid #C9E265', borderColor: '#5F7316', marginTop:'10px' }}>
                                            deletar
                                        </Button>
                                    </Box>
                                </Link>
                                <Link to={`/comprar/${produto.id}`} className="text-decorator-none">
                                    <Box mx={1}>
                                        <Button variant="contained" size='small' style={{ backgroundColor: '#5F7316', color: 'white', marginTop:'10px'}} >
                                            comprar
                                        </Button>
                                    </Box>
                                </Link>
                            </Box>
                        </Box>
                    ))
                }
            </Box>
        </>
    )
}

export default ListaProduto;