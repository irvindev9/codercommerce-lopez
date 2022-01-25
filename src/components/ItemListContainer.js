import React from 'react';
import { useState } from 'react';
import Item from './Item';



const ItemListContainer = ({items}) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div>
      <h1>ItemListContainer</h1>
      <b>
        Seleccionado: {selectedItem !== null ? items[selectedItem].name : 'Ninguno'}
      </b>
      <ul>
      {
        items.map(({name, price}, index) => {
          return <Item key={index} name={name} id={index} price={price} setSelectedItem={setSelectedItem} />
        })
      }
      </ul>
    </div>
  );
};

export default ItemListContainer;
