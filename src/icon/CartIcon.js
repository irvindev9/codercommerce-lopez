import React from 'react';
import carticon from './carticon.png';

const CartIcon = () => {
  return (
    <div>
      <img className="carticon" src={carticon} alt="carticon" />
    </div>
  );
};

export default CartIcon;
