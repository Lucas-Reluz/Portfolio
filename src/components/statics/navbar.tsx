import React from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import "./navbar.css";


function Navbar() {

    return (
        <> 
            <AppBar position="static" style={{ backgroundColor: "", display: "flex", justifyContent: "center",  color: "#363636" }}>
                <Toolbar variant="dense">
                    <Grid xs={12} >
                        <Box display="flex" justifyContent='center' className='cor-barra3'>
                            
                            <Link to='/about' className='link-paginas'>
                                <Box mx={1} paddingX={3}>
                                    <Typography>
                                        Sobre Mim 
                                    </Typography>
                                </Box>
                            </Link>
                            
                            <Link to='/projects' className='link-paginas'>
                                <Box mx={1} paddingX={3}>
                                    <Typography >
                                        Projetos
                                    </Typography>
                                </Box>
                            </Link>
                            
                            <Link to='/contact' className='link-paginas'>
                                <Box mx={1} paddingX={3}>
                                    <Typography >
                                        Contato
                                    </Typography>
                                </Box>
                            </Link>
                            
                        </Box>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;