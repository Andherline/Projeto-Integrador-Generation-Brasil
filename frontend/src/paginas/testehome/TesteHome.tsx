import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './TesteHome.css';

function TesteHome() {
    return (
        <>
            <Grid direction='column' justifyContent="center" alignItems="center" spacing={2}>
                <Box className='caixa1' paddingTop={1}>
                    <Typography variant="h5" color="inherit" align="center">MISSÃO</Typography>
                    <Typography variant="h6" align="justify" gutterBottom >
                        Temos como missão fornecer excelentes produtos que possam melhorar a qualidade de vida de nossos estimados clientes, tendo em vista princípios de sustentabilidade, responsabilidade social e ambiental, respeito com o meio ambiente e com o cliente.
                        Procuramos atender nossos clientes da maneira mais fácil e segura possível, garantindo a integridade dos produtos e a segurança na compra e na entrega dos mesmos, junto com sementes de plantas diversas como brinde, que tem como objetivo incentivar o cultivo e o respeito à natureza.
                    </Typography>
                </Box>
                <Box className='caixa2'>
                    <Typography variant="h5" align="center">Visão</Typography>
                    <Typography variant="h6" align="center" gutterBottom>
                        Ser referência em fornecimento de produtos, através do e-commerce, com as melhores origens, os melhores equipamentos de industrialização e fidelizando a manutenção
                        adequada dos produtos.

                    </Typography>
                    <Typography variant="h5" color="inherit" align="center">VALORES</Typography>
                    <Typography variant="h6" gutterBottom>
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
                <Box>
                    <Typography variant="h5" color="inherit" align="center">OBJETIVO</Typography>
                    <Typography variant="h6" color="inherit" align="center">
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
                <Box>
                    <Typography variant="h5" color="inherit" align="center">SOBRE A NOSSA ECOLOJA</Typography>
                    <Typography variant="h6" color="inherit" align="center">
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
                <Box className='caixa3'>
                    <Box justifyContent="center" alignItems="center">
                        <Typography variant="h5" color="inherit" align='center'>Realizadores do Projeto</Typography>
                    </Box>

                    <Box display="flex" justifyContent="center">
                        <Box border={1} marginY={5} marginX={2} padding={2}
                            className="card">
                            <Box>
                                <img src="https://imgur.com/hVavFPA.png" width="100%" alt="" />
                            </Box>
                            <Typography variant="h3" color="initial">Membro</Typography>
                            <Typography variant="h5" color="initial">Descricao: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea accusamus commodi dignissimos provident?</Typography>
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <a href="https://github.com" target="_blank">
                                    <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                                </a>
                                <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                    <LinkedInIcon style={{ fontSize: 35, color: "black" }} />
                                </a>
                            </Box>
                        </Box>
                        <Box border={1} marginY={5} marginX={2} padding={2}
                            className="card">
                            <Box>
                                <img src="https://imgur.com/hVavFPA.png" width="100%" alt="" />
                            </Box>
                            <Typography variant="h3" color="initial">Membro</Typography>
                            <Typography variant="h5" color="initial">Descricao: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea accusamus commodi dignissimos provident?</Typography>
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <a href="https://github.com" target="_blank">
                                    <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                                </a>
                                <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                    <LinkedInIcon style={{ fontSize: 35, color: "black" }} />
                                </a>
                            </Box>
                        </Box>
                        <Box border={1} marginY={5} marginX={2} padding={2}
                            className="card">
                            <Box>
                                <img src="https://imgur.com/hVavFPA.png" width="100%" alt="" />
                            </Box>
                            <Typography variant="h3" color="initial">Membro</Typography>
                            <Typography variant="h5" color="initial">Descricao: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea accusamus commodi dignissimos provident?</Typography>
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <a href="https://github.com" target="_blank">
                                    <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                                </a>
                                <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                    <LinkedInIcon style={{ fontSize: 35, color: "black" }} />
                                </a>
                            </Box>
                        </Box>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box border={1} marginY={5} marginX={2} padding={2}
                            className="card">
                            <Box>
                                <img src="https://imgur.com/hVavFPA.png" width="100%" alt="" />
                            </Box>
                            <Typography variant="h3" color="initial">Membro</Typography>
                            <Typography variant="h5" color="initial">Descricao: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea accusamus commodi dignissimos provident?</Typography>
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <a href="https://github.com" target="_blank">
                                    <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                                </a>
                                <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                    <LinkedInIcon style={{ fontSize: 35, color: "black" }} />
                                </a>
                            </Box>
                        </Box>

                        <Box border={1} marginY={5} marginX={2} padding={2}
                            className="card">
                            <Box>
                                <img src="https://imgur.com/hVavFPA.png" width="100%" alt="" />
                            </Box>
                            <Typography variant="h3" color="initial">Membro</Typography>
                            <Typography variant="h5" color="initial">Descricao: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea accusamus commodi dignissimos provident?</Typography>
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <a href="https://github.com" target="_blank">
                                    <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                                </a>
                                <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                    <LinkedInIcon style={{ fontSize: 35, color: "black" }} />
                                </a>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default TesteHome;
