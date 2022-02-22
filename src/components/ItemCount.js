import React, { useState } from 'react';

const ItemCount = ({max = 0, addToCart}) => {
  const [count, setCount] = useState(1);

  const add = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  const remove = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return  (
    <div className="d-grid gap-2">
      <div className="btn-group mt-1" role="group">
        <button onClick={() => remove()} type="button" className="btn btn-outline-primary">-</button>
        <button type="button" className="btn btn-outline-primary" disabled>{count}</button>
        <button onClick={() => add()} type="button" className="btn btn-outline-primary">+</button>
      </div>
      <button className="btn btn-sm btn-outline-primary" onClick={() => {
        // onAdd(count);
        addToCart(count);
      }}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
