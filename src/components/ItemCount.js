import React, { useState } from 'react';

const ItemCount = ({max = 0}) => {
  const [count, setCount] = useState(0);

  const add = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  const remove = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return  (
    <div className="btn-group" role="group">
      <button onClick={() => remove()} type="button" className="btn btn-outline-primary">-</button>
      <button type="button" className="btn btn-outline-primary" disabled>{count}</button>
      <button onClick={() => add()} type="button" className="btn btn-outline-primary">+</button>
    </div>
  );
}

export default ItemCount;
