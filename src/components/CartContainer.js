import React from 'react'
import {CartContext} from '../context/CartContext';
import Cart from './Cart';

function CartContainer() {
  const {info, setInfo} = React.useContext(CartContext);

  return (
    <div>
      <Cart cart={info} setInfo={setInfo} />
    </div>
  )
}

export default CartContainer