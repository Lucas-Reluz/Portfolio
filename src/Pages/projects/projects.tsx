import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import Navbar from "../../components/statics/navbar";
import Slider from "../../components/swiper/slider";
import '../projects/projects.css'
import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Footer from "../../components/footer/footer";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 6,
    borderRadius: 5,
};

const settings = {
    spaceBetween: 90,
    sliderPerView: 3,
    navigation: true,
    pagination: { clickable: true, },
};

function Projects() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Navbar />
            <div className="title"><h1>PROJETOS</h1></div>
            <div className="ds">
                <Slider settings={settings}>
                    <SwiperSlide>
                        <div className="divS">
                            <img onClick={handleOpen} className="swp" src="https://i.imgur.com/gWzn7J4.png" alt="XepaCommerce, ecommerce feito através do bootcamp da Generation Brasil" />
                            <h2 className="nomeP">Ecommerce feito com base na ODS 2 da ONU</h2>
                            <p className="descP">CLIQUE NA IMAGEM PARA VER MAIS SOBRE!</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="divS">
                            <img onClick={handleOpen} className="swp" src="https://i.imgur.com/wh59vwC.png" alt="Recriação da Página da Netflix atráves do bootcamp da DIO" />
                            <h2 className="nomeP">Recriação Página Netflix</h2><p className="descP">CLIQUE NA IMAGEM PARA VER MAIS SOBRE!</p></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="divS"><img onClick={handleOpen} className="swp" src="https://i.imgur.com/q0GGTD3.png" alt="Recriação da Página da Netflix atráves do bootcamp da DIO" />
                            <h2 className="nomeP">Recriação da Página de Login Instagram</h2>
                            <p className="descP">CLIQUE NA IMAGEM PARA VER MAIS SOBRE!</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="divS"><img onClick={handleOpen} className="swp" src="https://i.imgur.com/yXrFK8h.png" alt="Jogo da Cobrinha, feito atráves do bootcamp da DIO" />
                            <h2 className="nomeP">Desenvolvido Jogo da Cobrinha</h2>
                            <p className="descP">CLIQUE NA IMAGEM PARA VER MAIS SOBRE!</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="divS"><img onClick={handleOpen} className="swp" src="https://i.imgur.com/kF8Erkw.gif" alt="Jogo da Cobrinha, feito atráves do bootcamp da DIO" />
                            <h2 className="nomeP">InfoTech - Em Breve!!!</h2>
                            <p className="descP">CLIQUE NA IMAGEM PARA VER MAIS SOBRE!</p>
                        </div>
                    </SwiperSlide>
                </Slider>
            </div>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography className="modaltl" id="modal-modal-title" variant="h6" component="h3">
                            <h4>Descrição Maior dos Projetos</h4>
                        </Typography>
                        <Typography className="modaltxt" id="modal-modal-description" sx={{ mt: 2 }}>
                            A maioria dos projetos foram feitos durante os Bootcamps da Digital Innovation One e da Generation Brasil, foi onde eu aprimorei muito minhas hard skills e soft skills. O XepaCommerce em especial, foi um projeto desenvolvido em grupo com base na ODS 2 da ONU, foi onde construímos desde a API com C#, .NET, ASP.NET, ao Front em React com TypeScript.
                            <ul>
                                <li className="lSites"><a className="targets" target="_blank" href="https://projeto-integrador-front-end.vercel.app/home">XepaCommerce</a></li>
                                <li className="lSites"><a className="targets" target="_blank" href="https://lucas-reluz.github.io/PaginaNetflix/">Recriação Página Netflix</a></li>
                                <li className="lSites"><a className="targets" target="_blank" href="https://htmlpreview.github.io/?https://github.com/Lucas-Reluz/Instagram/blob/master/Index.html">Recriação Página de Login do Instagram</a></li>
                                <li className="lSites"><a className="targets" target="_blank" href="https://github.com/Lucas-Reluz/ExercisesAndProjectsDIO/tree/master/Snake%20game">Jogo da Cobrinha</a></li>
                                <li className="lSites"><a className="targets" target="_blank" href="https://github.com/Lucas-Reluz/InfoTech">InfoTech - EM BREVE!!</a></li>
                            </ul>
                        </Typography>
                    </Box>
                </Modal>
            </div>
            <Footer />
        </>
    )
}
export default Projects;