import { Box } from '@mui/material';
import '../footer/footer.css'

function Footer() {
    return (
        <>
            <div className="linha1"></div>
            <Box className='bx1'>
                <a target="_blank" href="https://github.com/Lucas-Reluz">
                    <img  className='iconsIMG' src="https://i.imgur.com/r7vuXMz.png" alt="" />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/lucas-reluz/">
                    <img className='iconsIMG' src="https://i.imgur.com/b5zHEuD.png" alt="" />
                </a>
            </Box>
            <div className='direitos'>
                <p>Todos os Direitos Reservados © Lucas Reluz</p>
            </div>
        </>
    )
}
export default Footer;