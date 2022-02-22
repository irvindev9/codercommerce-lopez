import React from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';



const ItemListContainer = ({items}) => {

  const { id } = useParams();

  return (
    <div className='container'>
      <h1>ItemListContainer</h1>

      <ItemList id={id} />
    </div>
  );
};

export default ItemListContainer;
