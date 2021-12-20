import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import Produto from '../../models/Produto';
import { buscaId } from '../../services/Service';
import Carousel from 'react-elastic-carousel'
import { toast } from 'react-toastify';
import './Compra.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';



function Compra() {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
        );
    const [post, setPosts] = useState<Produto>();
    const [produtos, setProdutos] = useState<Produto[]>([])
    const [items, setstate] = useState([
    
        { id: 1, title: 'item #1', img: "https://i.imgur.com/rGhB3fJ.jpeg" },
        { id: 2, title: 'item #2', img: "https://i.imgur.com/M4dri5N.png" },
        { id: 3, title: 'item #3', img: "https://i.imgur.com/qnYWE9s.png" },
        { id: 4, title: 'item #4', img: "https://i.imgur.com/G5gLDSj.jpeg" }
    ])

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            history.push("/login")
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/produtos/${id}`, setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    function comprar() {
        toast.success('Compra realizada com sucesso!', {
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

    return (
        <>
            <Typography className="comprar-produto" gutterBottom>
                Comprar Produto
            </Typography>
            <Box display="flex" justifyContent='center' alignItems='center' className='margin-bottom'>
                <Box display="flex" alignItems='center' justifyContent='center'><img src={post?.foto} alt="" className='img-compra' /></Box>
                <Box justifyContent='initial' alignItems='flex-start'>
                    <Typography variant="h5" component="h2">
                        {post?.nome}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {post?.descricao}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {post?.preco}
                    </Typography>
                    <Button onClick={comprar} variant="contained" size='small' className='btn-compra'>
                        Comprar
                    </Button>
                    <Link to='/produtos' className='text-decorator-none'>
                        <Button variant='contained' size='small' color='secondary' className='btn-cancelar'>
                            Cancelar
                        </Button>
                    </Link>
                </Box>
            </Box>
            <Typography className="carousel-compra" gutterBottom>
                Confira nossos outros produtos
            </Typography>
            <Carousel itemsToShow={3} isRTL={false} enableAutoPlay autoPlaySpeed={15000} className="styling-example">
                {items.map(item => <div key={item.id}>
                    <img src={item.img} alt="" width="100%" height="100%" />
                </div>)}
            </Carousel>

            
        </>
    )
}

export default Compra;