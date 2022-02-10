import React from 'react';
import { useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';



const ItemListContainer = ({items}) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const { id } = useParams();

  return (
    <div className='container'>
      <h1>ItemListContainer</h1>
      <b>
        Seleccionado: {selectedItem !== null ? items[selectedItem].name : 'Ninguno'}
      </b>
      <ItemList id={id} />
    </div>
  );
};

export default ItemListContainer;
