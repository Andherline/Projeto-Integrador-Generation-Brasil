import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid } from '@material-ui/core';
import './Footer.css';

//alinha o sobre nós: margin ou padding
function Footer() {
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
          <Box display="flex" justifyContent="space-between" className='box1'>
            <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
              <Typography variant="h5" color="inherit" >
                <img src="https://imgur.com/hVavFPA.png" alt="logo" className="logo" />
              </Typography>
            </Box>
            <Box>
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>REDES SOCIAIS </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
              <a href="https://www.facebook.com/generationbrasil" target="_blank">
                <FacebookIcon style={{ fontSize: 30, color: "white" }} />
              </a>
              <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                <InstagramIcon style={{ fontSize: 30, color: "white" }} />
              </a>
              <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                <LinkedInIcon style={{ fontSize: 30, color: "white" }} />
              </a>
            </Box>
            </Box>
            <Box padding={2} display="flex" alignItems="center" justifyContent="center">
            <Typography  variant="h5" align="center" gutterBottom style={{ color: "white" }}>Sobre Nós</Typography>
            </Box>
          </Box>
          <Box className='box2'>
            <Box paddingTop={1} marginRight={5}>
              <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2021 Copyright: ECOLOJA</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Footer;