import { Box, Button, Grid, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Home.css';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import Carousel from 'react-elastic-carousel'
import { useState } from 'react'
import { Link } from 'react-router-dom';


function Home() {

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
            <Carousel isRTL={false} enableAutoPlay autoPlaySpeed={15000} className="styling-example">
                {items.map(item => <div key={item.id}>
                    <img src={item.img} alt="" width="100%" height="100%" />

                </div>)}
            </Carousel>

            )

            <Box display="flex" justifyContent='center' alignItems='center' className='fundo-missao'>
                <Box display="flex" alignItems='center' justifyContent='center'>
                    <img className='img-home' src="https://images.pexels.com/photos/4121087/pexels-photo-4121087.jpeg" alt="missao" />
                </Box>
                <Box justifyContent='initial' alignItems='flex-start' className='missao'>
                    <Typography variant="h5" color="inherit" align="center"><b>MISSÃO</b></Typography>
                    <Typography variant="h6">
                        Temos como missão fornecer excelentes produtos que possam melhorar a qualidade de vida de nossos estimados clientes, tendo em vista princípios de sustentabilidade, responsabilidade social e ambiental, respeito com o meio ambiente e com o cliente.
                        Procuramos atender nossos clientes da maneira mais fácil e segura possível, garantindo a integridade dos produtos e a segurança na compra e na entrega dos mesmos, junto com sementes de plantas diversas como brinde, que tem como objetivo incentivar o cultivo e o respeito à natureza.
                    </Typography>
                </Box>
            </Box>

            <Box display="flex" justifyContent='center' alignItems='center' className='fundo-missao'>                
                <Box justifyContent='initial' alignItems='flex-start' className='missao'>
                    <Typography variant="h5" align="center"><b>VISÃO</b></Typography>
                    <Typography variant="h6" align="center" gutterBottom>
                        Ser referência em fornecimento de produtos, através do e-commerce, com as melhores origens, os melhores equipamentos de industrialização e fidelizando a manutenção
                        adequada dos produtos.
                    </Typography>
                </Box>
                <Box display="flex" alignItems='center' justifyContent='center'>
                    <img className='img-home' src="https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_960_720.jpg" alt="missao" />
                </Box>
            </Box>

            <Box display="flex" justifyContent='center' alignItems='center' className='fundo-missao'>
                <Box display="flex" alignItems='center' justifyContent='center'>
                    <img className='img-home' src="https://images-ext-2.discordapp.net/external/TtQ5eZ8bi8a6k2WGjWUcxdj4vl8b1HGSLXSKHBDw1aA/%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D650%26w%3D940/https/images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg" alt="missao" />
                </Box>
                <Box justifyContent='initial' alignItems='flex-start' className='valores'>
                    <Typography variant="h5" color="inherit" align="center"><b>VALORES</b></Typography>
                    <Typography variant="h6">
                        <ul>
                            <li>Ter a preferência do cliente</li>
                            <li>Excelência na qualidade do produto</li>
                            <li>Comprometimento com resultados</li>
                            <li>Espírito de equipe</li>
                            <li>Respeito e profissionalismo</li>
                            <li>Credibilidade com todos os públicos</li>
                            <li>Integridade</li>
                            <li>Sustentabilidade econômica, social e ambiental</li>
                            <li>Valorização da pessoa</li>
                        </ul>
                    </Typography>
                </Box>
            </Box>

            <Box display="flex" justifyContent='center' alignItems='center' className='fundo-missao'>                
                <Box justifyContent='initial' alignItems='flex-start' className='missao'>
                    <Typography variant="h5" align="center"><b>OBJETIVO</b></Typography>
                    <Typography variant="h6" align="center" gutterBottom>
                    <p>
                        Criar valores para nossos produtos, obtendo lucros para viabilizar o crescimento da empresa, visando desenvolver melhoramentos contínuos nos processos e na capacitação dos colaboradores.
                        Nós temos como compromisso atuar de maneira consciente, aliando sempre o respeito ao ambiente e à sociedade na qual estamos inseridos, oferecendo o que tem de melhor no mercado.
                    </p>
                    <p>
                        Com o objetivo de expandir ONG's ambientais, que contribuem para o reflorestamento, doamos a elas 50% dos nossos lucros, e também procuramos incentivar nossos clientes a plantar e a cuidar do meio ambiente oferecendo
                        junto aos produtos brindes com sementes de plantas.
                    </p>
                    </Typography>
                </Box>
                <Box display="flex" alignItems='center' justifyContent='center'>
                    <img className='img-home' src="https://images-ext-1.discordapp.net/external/yNrXW3cSar76MspdgDHPi4WYpwb8lj1W9WFMbegAZJU/%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D650%26w%3D940/https/images.pexels.com/photos/8543118/pexels-photo-8543118.jpeg" alt="missao" />
                </Box>
            </Box>   

            <Box display="flex" justifyContent='center' alignItems='center' className='fundo-missao'>
                <Box display="flex" alignItems='center' justifyContent='center'>
                    <img className='img-home' src="https://images-ext-2.discordapp.net/external/MIz5FDeQhf6V1RkX5G9Fqj5edcVEp3agwA465Rhavgo/%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D650%26w%3D940/https/images.pexels.com/photos/8140917/pexels-photo-8140917.jpeg" alt="missao" />
                </Box>
                <Box justifyContent='initial' alignItems='flex-start' className='missao'>
                    <Typography variant="h5" color="inherit" align="center"><b>SOBRE A NOSSA ECOLOJA</b></Typography>
                    <Typography variant="h6">
                        É um prazer recebê-lo em nossa Ecoloja! Nela você pode encontrar variados tipos de produtos ligados ao Bem Estar e à Saúde. A busca por inovação, qualidade, variedade e respeito junto a nossos clientes são os critérios utilizados por nossa equipe para a seleção dos produtos que oferecemos.
                    </Typography>
                    <Link to ='/sobre'>
                        <Button size='medium' className='btn-saibamais'>Saiba mais</Button>
                    </Link>                    
                </Box>                
            </Box>

            <Box className='caixa3'>
                <Box justifyContent="center" alignItems="center">
                    <Typography variant="h5" color="inherit" align='center'><b>Realizadores do Projeto</b></Typography>
                </Box>

                <Box display="flex" justifyContent="center">
                    <Box border={1} marginY={5} marginX={2} padding={2}
                        className="card">
                        <Box className='img-membros'>
                            <img src="https://i.imgur.com/mzPOtQ0.jpeg" width="100%" height="100%" alt="" />
                        </Box>
                        <Typography variant="h3" color="initial" align='center'>Amanda</Typography>
                        <Typography variant="h5" color="initial">
                            Atuei no projeto, tanto nas partes de back end, quanto de front ent. Colaborei em equipe para desenvolver um layout criativo, estilizado e funcional.
                            Estou conectada com o mundo da tecnologia desde criança.
                            Gosto de ver Netflix e passar um tempo com a minha família e amigos.
                        </Typography>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/AmandaFaria" target="_blank">
                                <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/amanda-faria34/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 35, color: "black" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box border={1} marginY={5} marginX={2} padding={2}
                        className="card">
                        <Box className='img-membros'>
                            <img src="https://i.imgur.com/3VhTncM.jpg" width="100%" height="100%" alt="" />
                        </Box>
                        <Typography variant="h3" color="initial" align='center'>Anderson</Typography>
                        <Typography variant="h5" color="initial" align='justify'>
                            No projeto atuei no backend na criação da api do ecommerce e no frontend na estilização das páginas da ecoloja. Tive uma experiência fullstack no projeto, me  permitindo ter  uma  visão holística dele. Pois sempre tive interesse em saber como as coisas funcionam e as relações entre elas.
                        </Typography>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/Andherline" target="_blank">
                                <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/andersousasilva/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 35, color: "black" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box border={1} marginY={5} marginX={2} padding={2}
                        className="card">
                        <Box className='img-membros'>
                            <img src="https://i.imgur.com/BNGEqYM.jpg" width="100%" alt="" />
                        </Box>
                        <Typography variant="h3" color="initial" align='center'>Giovanni</Typography>
                        <Typography variant="h5" color="initial">
                            Atuei na descrição do projeto e também colaborei com a construção dos códigos de Frontend.
                            Estou muito empolgado com esse vasto mundo da tecnologia e pretendo aprender e me desenvolver cada vez mais para me tornar um excelente profissional.
                        </Typography>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/GiovanniMarcinari" target="_blank">
                                <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/giovanni-marcinari-09a903215/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 35, color: "black" }} />
                            </a>
                        </Box>
                    </Box>
                </Box>
                <Box display="flex" justifyContent="center">
                    <Box border={1} marginY={5} marginX={2} padding={2}
                        className="card">
                        <Box>
                            <img src="https://i.imgur.com/hfhjShz.jpg" width="100%" height="100%" alt="" />
                        </Box>
                        <Typography variant="h3" color="initial" align='center'>Isabella</Typography>
                        <Typography variant="h5" color="initial">
                            Atuei no projeto nas partes do back e do front end, além disso, contribui ajudando com ideias na estilização.
                            Nas minhas horas vagas, sempre fico em contato com a tecnologia, gosto de escutar música e assistir a filmes e séries.
                        </Typography>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/isabellammarinho" target="_blank">
                                <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/isabella-marinho-b75311221/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 35, color: "black" }} />
                            </a>
                        </Box>
                    </Box>

                    <Box border={1} marginY={5} marginX={2} padding={2}
                        className="card">
                        <Box>
                            <img src="https://i.imgur.com/2eXukAj.jpg" width="100%" alt="" />
                        </Box>
                        <Typography variant="h3" color="initial" align='center'>Rafael</Typography>
                        <Typography variant="h5" color="initial">Participei das partes de estilização da home, cadastro e login, também partes das funções de backEnd  mas principalmente no FrontEnd, tenho uma forte ligação com essa parte da tecnologia envolvendo computadores.</Typography>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/Rafa-Paiva" target="_blank">
                                <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/rafael-paiva-70b117221/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 35, color: "black" }} />
                            </a>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Home;
