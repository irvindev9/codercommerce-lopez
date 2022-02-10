import React from 'react';
import ItemCount from './ItemCount';

const Item = ({name, price, id, setSelectedItem}) => {
  return (
    <div className="col-3 p-3">
      <div className="card">
        <div className="card-body">
          <a href={'/item/' + id}><h5 className="card-title">{name}</h5></a>
          <p className="card-text">Precio: ${price}</p>
          {/* <button onClick={() => setSelectedItem(id)}>Seleccionar</button> */}
          <ItemCount max={10} />
        </div>
      </div>
  </div>
  )
};

export default Item;
