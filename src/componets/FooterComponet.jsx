import React from 'react';
import { Box, Container, Grid, Link, Typography, IconButton, TextField, Button, ButtonGroup } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        // backgroundColor: 'primary.main',
        backgroundColor: 'black',
        color: 'white',
        py: 3,
        mt: 'auto',
      }}
    >
      <div className="logo">
        <h2 className='df jcc aic'>CODE FLINK</h2>
      </div>
      <hr />
      <div className="grid">
        <div className="grid-item">
          <h6>Reach us</h6>
          <ul className="df fdc">
            <li><a href="tel:+917477778845">+91 7477778845</a></li>
            <li><a href="mailto:premkumar.c@codeflink.in">premkumar.c@codeflink.in</a></li>
            <li><a href="https://www.google.com/maps/place/Thendral+Nagar+Main+Rd,+Tamil+Nadu+625019/@9.9324661,78.0367915,17z/data=!4m15!1m8!3m7!1s0x3b00cebe2c8b277d:0xdc3d6c228cef6369!2sThendral+Nagar+Main+Rd,+Tamil+Nadu+625019!3b1!8m2!3d9.9324661!4d78.0393664!16s%2Fg%2F1ptw82p_z!3m5!1s0x3b00cebe2c8b277d:0xdc3d6c228cef6369!8m2!3d9.9324661!4d78.0393664!16s%2Fg%2F1ptw82p_z?hl=en&entry=ttu" target='_blank'>227C2, Thendral Nagar, Oddanchatram, Dindigul</a></li>
          </ul>
        </div>
        <div className="grid-item">
          <h6>Company</h6>
          <ul className="df fdc">
            <li><a href="#!">CodeFlink</a></li>
            <li><a href="#!">Services</a></li>
            <li><a href="#!">Blogs</a></li>
          </ul>
        </div>
        <div className="grid-item">
          <h6>Legal</h6>
          <ul className="df fdc">
            <li><a href="#!">Terms & conditions</a></li>
            <li><a href="#!">Contact</a></li>
            <li><a href="#!">Blogs</a></li>
          </ul>
        </div>
        <div className="grid-item">
          <h6>Newsletter</h6>
          <p className='p1r'>Subscribe to our newsletter to get the latest updates.</p>
          <ButtonGroup variant="contained" aria-label="Basic button group" sx={{height:'50px'}}>
            <TextField id="standard-basic" type="email" placeholder='email' variant="outlined" sx={{ width: '100%' , backgroundColor:'grey',color:'white'}} />
            <Button>SUbscribe</Button>
          </ButtonGroup>
          {/* <TextField id="standard-basic" type="email" label="Email" variant="standard" sx={{ width: '100%' }} /> */}
        </div>
      </div>
      <div className="footer-text">
        <p>&copy; <span id="year"></span> Your Company. All rights reserved.</p>
      </div>

    </Box>
  );
};

export default Footer;
