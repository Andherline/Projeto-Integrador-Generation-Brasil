import { Box, Button, Grid, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Sobre.css';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import Carousel from 'react-elastic-carousel'
import { useState } from 'react'


function Sobre() {

    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const [items, setstate] = useState([
        { id: 1, title: 'item #1', img: "https://i.imgur.com/wNUVda4.png" },
        { id: 2, title: 'item #2', img: "https://i.imgur.com/JkAh04s.png" },
        { id: 3, title: 'item #3', img: "https://i.imgur.com/gu92OQl.png" },
        { id: 4, title: 'item #4', img: "https://i.imgur.com/8CJm93u.png" }
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

    return (
        <>           
            <Box>
                <Typography variant="h2" color="inherit" align="center" className='titulo-sobre'><b>SOBRE A NOSSA ECOLOJA</b></Typography>
                <img src="https://images.unsplash.com/photo-1520121401995-928cd50d4e27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="image-sobre" className='img-sobre'/>
                <Typography variant="h6" color="inherit" align="center" className='texto-sobre'>
                    <p>
                        É um prazer recebê-lo em nossa Ecoloja! Nela você pode encontrar variados tipos de produtos ligados ao Bem Estar e à Saúde. A busca por inovação, qualidade, variedade e respeito junto a nossos clientes são os critérios utilizados por nossa equipe para a seleção dos produtos que oferecemos.
                    </p>
                    <p>
                        Trabalhamos com os principais fornecedores e os melhores e mais atualizados produtos nacionais e importados para que o nosso público encontre a variedade, a seleção e a qualidade que procura.
                    </p>
                    <p>
                        Nossa missão é oferecer produtos que possam melhorar a qualidade de vida de nossos estimados clientes.

                    </p>
                    <p>
                        Buscando sempre a inovação para melhor atender os nossos clientes criamos a Ecoloja. Um site moderno, seguro e simples, onde você encontra produtos de primeira linha e contribui com o meio ambiente.
                    </p>
                    <p>
                        Atualmente, vivemos uma época em que as pessoas buscam cada vez mais expressar suas opiniões e procurar encontrar por si mesmo todas as informações na Internet. Dentre muitas áreas, algumas questões acabam ganhando destaque, como questões ambientais e de sustentabilidade. Isso é muito positivo e importante, incentivando muitas empresas a se adaptar e criar novas formas de produzir e atender as necessidades dos clientes.
                    </p>
                    <p>
                        Com o desenvolvimento das redes sociais e a aquisição de mais informações na Internet, as pessoas estão mais interessadas e preocupadas com o ecossistema, o meio ambiente, os animais e os empreendimentos sociais. No mercado, em geral, os consumidores estão comprando cada vez mais, marcas que tem como foco a sustentabilidade e o respeito ao meio ambiente, seja online ou offline.
                    </p>
                    <p>
                        Portanto, a sustentabilidade é muito importante inclusive para atrair novos consumidores, fidelizar os clientes, aumentar as vendas de produtos e valorizar a imagem no mercado.
                    </p>
                    <p>
                        Em um mundo cada vez mais consciente, acreditamos que vincular nosso e-commerce à ações e atitudes sustentáveis ​​é fundamental.
                    </p>
                    <p>
                        A sustentabilidade do e-commerce é uma questão básica que precisa ser discutida, pois pode trazer muitos benefícios para as marcas, a sociedade e o meio ambiente. Acreditamos no impacto positivo que podemos ter na psicologia de muitas pessoas aumentando sua consciência sobre como os produtos são produzidos e descartados, encontrando maneiras de trabalhar com menos poluição, usando materiais reutilizáveis ​​ou recicláveis, visando uma produção que não agrida a natureza, dentre muitas outras possibilidades criativas que podem permitir uma integração maior entre a sociedade e o ecossistema.
                    </p>
                </Typography>
            </Box>
        </>
    )
}

export default Sobre;
