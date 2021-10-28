import React, { useState } from 'react';
import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { withRouter, Link } from 'react-router-dom';
import { Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Logo from '../../icon/Group 33072.png';
import Avatar from '../../icon/Avatar face.png';
import { useAuth } from '../Context/AuthContext';


const NavBar = (props) => {
  const { currentUser } = useAuth();
  const { history } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const menuItem = [
    {
      id: 1,
      menuTitle: 'Home',
      pageURL: '/'
    },
    {
      id: 2,
      menuTitle: 'Orders',
      pageURL: '/orders'
    },
    {
      id: 3,
      menuTitle: 'Admin',
      pageURL: '/admin'
    },
    {
      id: 4,
      menuTitle: 'Deals',
      pageURL: '/deals'
    },
    {
      id: 5,
      menuTitle: currentUser ? (<div>
        <img className="avatar" src={Avatar} alt="" />
        <p style={{textAlign: 'center', fontWeight: 'bold'}}><small>{currentUser.displayName}</small></p>
      </div>
      ) : <button className="login-btn">Sign up</button>,
      pageURL: !currentUser && '/logup'
    }
  ]
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img style={{ height: '20px', width: '80px' }} src={Logo} alt="" />
          </Typography>
          <div>
            {isMobile ? (
              <>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenu}
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={() => setAnchorEl(null)}
                >
                  {
                    menuItem.map(item => {
                      const { menuTitle, pageURL } = item;
                      return (
                        <MenuItem onClick={() => handleMenuClick(pageURL)} key={item.id}>{menuTitle}</MenuItem>
                      )
                    })
                  }
                </Menu>
              </>
            ) :
              (
                <div>
                  <ul className="nav-links">
                    <Link to="/home" className="home">
                      <li>Home</li>
                    </Link>
                    <Link to="/orders" className="orders">
                      <li>Orders</li>
                    </Link>
                    <Link to="/admin" className="admin">
                      <li>Admin</li>
                    </Link>
                    <Link to="/deals" className="deals">
                      <li>Deals</li>
                    </Link>
                    {
                      currentUser ? (<div className="avatar-wrapper">
                        <img className="avatar" src={Avatar} alt="" />
                        <p><small>{currentUser.displayName}</small></p>
                      </div>
                      ) : <Link to="/logup">
                        <button className="login-btn">Sign up</button>
                      </Link>
                    }
                  </ul>
                </div>
              )
            }
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default withRouter(NavBar);