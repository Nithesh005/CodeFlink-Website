import React from 'react';
import { Box, Container, Grid, Link, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        // backgroundColor: 'primary.main',
        backgroundColor: 'darkorange',
        color: 'black',
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
            <li><a href="#">8668027223</a></li>
            <li><a href="#">codeflink@gmail.com</a></li>
            <li><a href="#">Ghanthipuram, Coimbatore</a></li>
          </ul>
        </div>
        <div className="grid-item">
          <h6>Company</h6>
          <ul className="df fdc">
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blogs</a></li>
          </ul>
        </div>
        <div className="grid-item">
          <h6>Legal</h6>
          <ul className="df fdc">
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blogs</a></li>
          </ul>
        </div>
        <div className="grid-item">
          <h6>Newsletter</h6>
          <p className='p1r'>Subscribe to our newsletter to get the latest updates.</p>
        </div>
      </div>
      <div className="footer-text">
        <p>&copy; <span id="year"></span> Your Company. All rights reserved.</p>
      </div>

    </Box>
  );
};

export default Footer;
