import { Button, TextField } from "@material-ui/core";
import { Box } from "@mui/material";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/statics/navbar";
import '../contacts/contacts.css'

export default function Contact() {
    return (
        <>
            <Navbar />
            <div className="bodyFake">
                <h1 className="tituloC">Contate-me!</h1>
                <p className="descricaoC">Caso queira me contatar por email, me envie no lucas-generozo1@hotmail.com, ou preencha estes campos abaixo e me envie uma mensagem!</p>
                <form
                    action="https://formsubmit.co/lucas-generozo1@hotmail.com"
                    method="POST"
                    className="form"
                >
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" id="name" required />
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" required />
                    <label htmlFor="message">Mensagem</label>
                    <textarea name="message" id="message" required></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </div>
            <Footer />
        </>
    )
}