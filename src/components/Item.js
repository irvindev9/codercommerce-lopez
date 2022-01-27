import React from 'react';
import ItemCount from './ItemCount';

const Item = ({name, price, id, setSelectedItem}) => {
  return (
    <li>
      {name}: {price} 
      <br/>
      {/* <button onClick={() => setSelectedItem(id)}>Seleccionar</button> */}
      <ItemCount max={10} />
    </li>
  )
};

export default Item;
