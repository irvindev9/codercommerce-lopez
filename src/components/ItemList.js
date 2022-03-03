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
      <h1>Listado</h1>
      <div className="row">
        {
          id ?
          products.map((item, index) => {
            if (item.category === id) {
              return <Item key={index} id={index} {...item} />
            }
          })
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
