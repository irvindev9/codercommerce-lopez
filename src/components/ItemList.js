import React, { useEffect, useState } from 'react';
import Items from "../resources/items";
import Item from './Item';

const ItemList = ({id = null}) => {
  const [items, setItems] = useState([]);

  console.log(items.filter(item => item.category === id));

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
          id ?
            items.filter(item => item.category === id).map(item => <Item key={item.id} {...item}  />)
            :
            items.map(item => (
              <Item key={item.id} {...item} />
            ))
        }

      </div>
    </div>
  );
};

export default ItemList;
