import { useState, useContext } from 'react';
import React from 'react'
import ItemCount from './ItemCount';
import {CartContext} from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
 
const ItemDetail = ({ item }) => {
  const history = useNavigate();

  const { info, setInfo } = React.useContext(CartContext);

  

  const [numberOfItems, setnumberOfItems] = useState(0);

  const addToCart = (items) => {
    setnumberOfItems(items);
    setInfo({
      ...info,
      [item.name]: {
        ...item,
        quantity: items
      }
    });
  }

  const goToCart = () => {
    history('/cart');
  }

  return (
    <div className="container">
      <h1>ItemDetail</h1>
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <img src={item.image} className="card-img-top" alt="image" />
            <div className="card-body item-detail-container">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <button className="btn btn-primary">${item.price}</button>
              <br />

              { numberOfItems === 0 ? (<ItemCount max={item.quantity} addToCart={addToCart} />) : (<small className="text-center mt-1">{numberOfItems} articulos en el carrito</small>)}
              
              <br />
              
              <br />
              <button className='btn btn-primary mt-1' onClick={goToCart}>Comprar ahora</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;