import React from 'react';

const Item = ({name, price, id, setSelectedItem}) => {
  return (
    <li>
      {name}: {price} 
      <button onClick={() => setSelectedItem(id)}>Seleccionar</button>
    </li>
  )
};

export default Item;
