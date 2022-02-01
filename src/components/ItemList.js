import React, { useEffect, useState } from 'react';
import Items from "../resources/items";
import Item from './Item';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    Items().then(items => {
      setItems(items);
    });
  }, []);

  return (
    <div>
      <h1>ItemList</h1>
      <div className="row">
        {
          items.map(item => (
            <Item key={item.id} {...item} />
          ))
        }
      </div>
    </div>
  );
};

export default ItemList;
