import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import cflogo from '../assets/cf_bg_r.png'
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';
const logoStyle = {
  // width: '140px',
  height: 'auto',
  cursor: 'pointer',
};

function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  const lastScroll = React.useRef(0);
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const appbar = document.getElementsByClassName('appbar')[0];
      appbar.style.transition = 'top .5s';
      if (scrollTop > lastScroll.current) {
        appbar.style.top = '-90px';
      } else {
        appbar.style.top = '0';
      }
      lastScroll.current = scrollTop;
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div>
      <AppBar
        // position="fixed"
        className='appbar'
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                justifyContent: 'space-between',
                px: 0,
              }}
            >
              <Tooltip title="Code Flink: Agile Innovations">
                <a href="#home">
                  <img
                    src={cflogo}
                    height={50}
                    width={50}
                    style={logoStyle}
                    alt="logo of sitemark"
                  />
                </a>
              </Tooltip>


              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Typography variant="body2" color="text.primary" href='#home' component="a" sx={{ textDecoration: 'none' }}>
                  <MenuItem
                    component={Link}
                    to="/"
                    onClick={() => scrollToSection('features')}
                    sx={{ py: '6px', px: '12px' }}
                  >
                    Home
                  </MenuItem>
                </Typography>

                <Typography variant="body2" color="text.primary" component='a' href='#ProductsPage'>
                  <MenuItem
                    onClick={() => scrollToSection('highlights')}
                    sx={{ py: '6px', px: '12px' }}
                  >
                    Products
                  </MenuItem>
                </Typography>
                <Typography variant="body2" color="text.primary" href='#services' component="a">
                  <MenuItem
                    onClick={() => scrollToSection('pricing')}
                    sx={{ py: '6px', px: '12px' }}
                  >
                    Services
                  </MenuItem>
                </Typography>
                <Typography variant="body2" color="text.primary">
                  <MenuItem
                    component={Link}
                    to="/career"
                    onClick={() => scrollToSection('faq')}
                    sx={{ py: '6px', px: '12px' }}
                    // target='_blank'
                  >
                    Careers
                  </MenuItem>
                </Typography>
                <Typography variant="body2" color="text.primary" component='a' href='#contactus'>
                  <MenuItem
                    onClick={() => scrollToSection('highlights')}
                    sx={{ py: '6px', px: '12px' }}
                  >
                    Contact Us
                  </MenuItem>
                </Typography>
              </Box>
            </Box>
            {/* <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              <Button
                color="primary"
                variant="text"
                size="small"
                component="a"
                href="/material-ui/getting-started/templates/sign-in/"
                target="_blank"
              >
                Sign in
              </Button>
            </Box> */}
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                  </Box>
                  <div className="drawerHeader">
                    <img src={cflogo} alt="Code Flink Logo" className="drawerLogo" />
                    CODE FLINK
                  </div>

                  <Typography variant="body2" color="text.primary" href='#home' component="a" sx={{ textDecoration: 'none' }}>
                    <MenuItem
                      component={Link}
                      to="/"
                      onClick={() => scrollToSection('features')}
                      sx={{ py: '6px', px: '12px' }}
                    >
                      Home
                    </MenuItem>
                  </Typography>
                  <Typography variant="body2" color="text.primary" component='a' href='#ProductsPage'>
                    <MenuItem
                      onClick={() => scrollToSection('highlights')}
                      sx={{ py: '6px', px: '12px' }}
                    >
                      Products
                    </MenuItem>
                  </Typography>
                  <Typography variant="body2" color="text.primary" href='#services' component="a">
                    <MenuItem
                      onClick={() => scrollToSection('pricing')}
                      sx={{ py: '6px', px: '12px' }}
                    >
                      Services
                    </MenuItem>
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    <MenuItem
                      component={Link}
                      to="/career"
                      onClick={() => scrollToSection('faq')}
                      sx={{ py: '6px', px: '12px' }}
                      // target='_blank'
                    >
                      Careers
                    </MenuItem>
                  </Typography>
                  <Typography variant="body2" color="text.primary" component='a' href='#contactus'>
                    <MenuItem
                      onClick={() => scrollToSection('highlights')}
                      sx={{ py: '6px', px: '12px' }}
                    >
                      Contact Us
                    </MenuItem>
                  </Typography>
                  {/* <MenuItem onClick={() => scrollToSection('faq')}>FAQ</MenuItem> */}
                  <Divider />
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="outlined"
                      component="a"
                      // href="/material-ui/getting-started/templates/sign-in/"
                      // target="_blank"
                      sx={{ width: '100%' }}
                    >
                      Sign in
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

// AppAppBar.propTypes = {
//   mode: PropTypes.oneOf(['dark', 'light']).isRequired,
//   toggleColorMode: PropTypes.func.isRequired,
// };

export default AppAppBar;