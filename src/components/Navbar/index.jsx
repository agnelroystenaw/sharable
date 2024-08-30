import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ShoppingCartButton from '../ShoppingCartButton';
import './Navbar.scss';

/**
 * Navbar component renders the navbar with app name and shopping cart icon
 * @param {*} props
 * @returns jsx
 */
const Navbar = ({ items = 0 }) => {
  return (
    <Box sx={{ flexGrow: 1 }} className='app-navbar'>
      <AppBar position='static'>
        <Toolbar className='items-container'>
          <div className='adjusting-div'></div>
          <div className='app-title'>Bengaluru eShopping</div>
          <ShoppingCartButton itemCount={items} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
