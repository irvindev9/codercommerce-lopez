import { useState } from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {

  const [addToItemsCart, setAddItemsToCart] = useState(0);

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

              { addToItemsCart === 0 ? (<ItemCount max={item.quantity} onAdd={setAddItemsToCart} />) : (<small className="text-center mt-1">{addToItemsCart} articulos en el carrito</small>)}
              
              <br />
              
              <br />
              <a className='btn btn-primary mt-1' href="/cart">Comprar ahora</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;