import { useContext } from 'react';
import {CartContext} from '../context/CartContext';

const Cart = ({cart}) => {

  const { info, setInfo } = useContext(CartContext);

  const deleteItem = (key) => {
    const newCart = Object
      .keys(info)
      .reduce((acc, item) => {
        if (item !== key) {
          acc[item] = info[item];
        }
        return acc;
      }, {});

    setInfo(newCart);
  }

  return (
    <div className="cart">
      <h2>Cart</h2>
      <div className="cart-items">
      <ul className="list-group">
        {Object.keys(cart).map((key, index) => (
          <li key={index} className="list-group-item">
            {cart[key].name} : {cart[key].quantity} x (${cart[key].price})
            <button style={{
              float: 'right',
            }} className="btn btn-danger btn-sm p-0 mx-1" onClick={() => {deleteItem(key)}}>Remove</button>
            <span style={{
              float: 'right',
            }}>${cart[key].price * cart[key].quantity}</span>
          </li>
        ))}
        <li className="list-group-item">
          Total: <span style={{
            float: 'right',
          }}>${Object.values(cart).reduce((acc, item) => acc + (item.price * item.quantity), 0)}</span>
        </li>
      </ul>
      </div>
      <div className="cart-total">
        <button className="btn btn-primary float-end mt-3 mx-2">Terminar mi compra</button>
      </div>
    </div>
  );
}

export default Cart;