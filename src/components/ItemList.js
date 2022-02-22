import React, { useEffect, useState } from 'react';
import Item from './Item';
import { getItems } from '../utils/firebase';

const ItemList = ({id = null}) => {
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getItems().then(response => {
      setProducts(response);
    });
  }, []);

  return (
    <div>
      <h1>ItemList</h1>
      <div className="row">
        {
          id ?
          products.filter(item => item.category === id).map((item, index) => <Item key={index} id={index} name={item.name} price={item.price}  />)
            :
            products.map((item, index) => (
              <Item key={index} id={index} {...item} />
            ))
        }

      </div>
    </div>
  );
};

export default ItemList;
