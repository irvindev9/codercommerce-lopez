import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({name, price, id, image}) => {
  return (
    <div className="col-3 p-3">
      <div className="card">
        <div className="card-body">
          <img src={image} className="card-img-top" alt="image" />
          <Link to={'/item/' + id}><h5 className="card-title">{name}</h5></Link>
          <p className="card-text">Precio: ${price}</p>
          {/* <button onClick={() => setSelectedItem(id)}>Seleccionar</button> */}
        </div>
      </div>
  </div>
  )
};

export default Item;
