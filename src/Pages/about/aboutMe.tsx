import '../about/aboutMe.css'
import React from 'react';
import Navbar from "../../components/statics/navbar";
import { Grid } from '@material-ui/core';
import '../about/aboutMe.css'
import { Box, Container, Rating, Stack, Typography } from '@mui/material';
import Footer from '../../components/footer/footer';

function About() {
    return (
        <>
            <Navbar />
            <Container className='container-sobre'>
                <h1 className='titulos'>Sobre Mim</h1>
                <Box className='box-sobre'>
                    <Grid md={6} className='sobreNos'>
                        <p className='txtSobre' >
                            Tenho 19 anos, sempre fui muito apaixonado por tecnologia e jogos, comecei a ter contato com programação em 2021, e em 2022 comecei a desenvolver muito minhas soft skills e hard skills. Sou muito persistente, proativo e criativo, tenho uma ótima comunicação e trabalho muito bem em equipe.
                            Atualmente venho estudando sobre C#, SQL, TypeScript, JavaScript, CSS, HTML, React, .NET, POO.
                            Tenho fácil aprendizagem e adaptação e estou buscando minha primeira oportunidade como desenvolvedor.
                        </p>
                    </Grid>
                    <Grid md={6}>
                        <img src="https://i.imgur.com/2dT2j1U.jpg" alt="" className='imgs-sobre' />
                    </Grid>
                </Box>
                <hr className='linha' />
                <h1 className='titulos'>Hard Skills</h1>
                <Box className='box-sobre'>
                    <Grid md={4} className='sobreNos'>
                        <h2>C#</h2>
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
                        </Stack>
                    </Grid>
                    <Grid md={4} className='sobreNos'>
                        <h2>CSS</h2>
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
                        </Stack>
                    </Grid>
                    <Grid md={4} className='sobreNos'>
                        <h2>HTML</h2>
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
                        </Stack>
                    </Grid>
                </Box>
                <Box className='box-sobre'>
                    <Grid md={4} className='sobreNos'>
                        <h2>JavaScript</h2>
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={3.0} precision={0.5} readOnly />
                        </Stack>
                    </Grid>
                    <Grid md={4} className='sobreNos'>
                        <h2>TypeScript</h2>
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={3.0} precision={0.5} readOnly />
                        </Stack>
                    </Grid>
                    <Grid md={4} className='sobreNos'>
                        <h2>SQL</h2>
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={3.0} precision={0.5} readOnly />
                        </Stack>
                    </Grid>
                </Box>
                <Box className='box-sobre'>
                    <Grid md={4} className='sobreNos'>
                        <h2>REACT</h2>
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={3.0} precision={0.5} readOnly />
                        </Stack>
                    </Grid>
                    <Grid md={4} className='sobreNos'>
                        <h2>.NET</h2>
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={3.0} precision={0.5} readOnly />
                        </Stack>
                    </Grid>
                </Box>
                <hr className='linha' />
                <h1 className='titulos'>Soft Skills</h1>
                <Box className='box-sobre'>
                    <Grid md={4} className='sobreNos'>
                        <h2>Trabalho em Equipe</h2>
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={5.0} precision={0.5} readOnly />
                        </Stack>
                    </Grid>
                    <Grid md={4} className='sobreNos'>
                        <h2>Comunicação</h2>
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={5.0} precision={0.5} readOnly />
                        </Stack>
                    </Grid>
                    <Grid md={4} className='sobreNos'>
                        <h2>Persistência</h2>
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={5.0} precision={0.5} readOnly />
                        </Stack>
                    </Grid>
                </Box>
                <Box className='box-sobre'>
                    <Grid md={4} className='sobreNos'>
                        <h2>Proatividade</h2>
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
                        </Stack>
                    </Grid>
                    <Grid md={4} className='sobreNos'>
                        <h2>Orientação ao Detalhe</h2>
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
                        </Stack>
                    </Grid>
                    <Grid md={4} className='sobreNos'>
                        <h2>Responsabilidade</h2>
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
                        </Stack>
                    </Grid>
                </Box>
                <Box className='box-sobre'>
                    <Grid md={4} className='sobreNos'>
                        <h2>Orientação ao Futuro</h2>
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
                        </Stack>
                    </Grid>
                    <Grid md={4} className='sobreNos'>
                        <h2>Criatividade</h2>
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
                        </Stack>
                    </Grid>
                </Box>
                <Footer />
            </Container>

        </>
    )
}

export default About;