import { useContext, useState, useEffect } from 'react';
import {CartContext} from '../context/CartContext';
import { sendOrder } from '../utils/firebase';

const Cart = ({cart}) => {

  const { info, setInfo } = useContext(CartContext);
  const [buyer, setBuyer] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const [order, setOrder] = useState([]);

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

  useEffect(() => {
    const newOrder = Object
      .keys(info)
      .map(item => {
        return {
          name: info[item].name,
          price: info[item].price,
          quantity: info[item].quantity
          }
          });
          setOrder(newOrder);
          }, []);

  return (
    <div className="cart">
      <h2>Cart</h2>
      <div className="buyer-info col-5 offset-1 my-3">
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Ingrese nombre"
            value={buyer.name}
            onChange={(e) => setBuyer({...buyer, name: e.target.value})}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Telefono</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Ingrese telefono"
            value={buyer.phone}
            onChange={(e) => setBuyer({...buyer, phone: e.target.value})}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Ingrese email"
            value={buyer.email}
            onChange={(e) => setBuyer({...buyer, email: e.target.value})}
          />
        </div>
      </div>
      <div className="cart-items container">
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
        <button onClick={() => sendOrder(buyer, order)} className="btn btn-primary float-end mt-3 mx-2">Terminar mi compra</button>
      </div>
    </div>
  );
}

export default Cart;