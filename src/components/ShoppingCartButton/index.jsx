import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './ShoppingCartButton.scss';

/**
 * ShoppingCartButton renders the shopping cart icon with numbers of cart items
 * @param {*} props
 * @returns jsx
 */
const ShoppingCartButton = ({ itemCount }) => {
  return (
    <div className='shopping-cart'>
      <ShoppingCartIcon fontSize='large' />
      <span>Cart</span>
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

export default ShoppingCartButton;
