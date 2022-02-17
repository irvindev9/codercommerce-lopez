import React from 'react'
import {CartContext} from '../context/CartContext';

function CartContainer() {
  const {info, setInfo} = React.useContext(CartContext);

  return (
    <div>{ JSON.stringify(info) }</div>
  )
}

export default CartContainer