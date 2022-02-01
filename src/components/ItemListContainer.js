import React from 'react';
import { useState } from 'react';
import ItemList from './ItemList';



const ItemListContainer = ({items}) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className='container'>
      <h1>ItemListContainer</h1>
      <b>
        Seleccionado: {selectedItem !== null ? items[selectedItem].name : 'Ninguno'}
      </b>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
