import { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import {CartContext} from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
 
const ItemDetail = ({ item }) => {
  const history = useNavigate();

  const { info, setInfo } = useContext(CartContext);

  console.log(info)

  const [numberOfItems, setnumberOfItems] = useState(0);

  const addToCart = () => {
    setInfo({
      ...info,
      item
    });
    
    history('/cart');

    console.log(info);
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
              <a href="#" className="btn btn-primary">${item.price}</a>
              <br />

              { numberOfItems === 0 ? (<ItemCount max={item.quantity} onAdd={setnumberOfItems} />) : (<small className="text-center mt-1">{numberOfItems} articulos en el carrito</small>)}
              
              <br />
              
              <br />
              {/* <a className='btn btn-primary mt-1' href="/cart">Comprar ahora</a> */}
              <button className='btn btn-primary mt-1' onClick={addToCart}>Comprar ahora</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;