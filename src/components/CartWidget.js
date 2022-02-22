import React from "react";
import { useState } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { info, setInfo } = React.useContext(CartContext);

  const [quantityOfItems, setQuantityOfItems] = useState(0);

  React.useEffect(() => {
    setQuantityOfItems(Object.values(info).reduce((acc, item) => acc + item.quantity, 0));
  }, [info]);

  return (
    <span>
      {quantityOfItems > 0 ? (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {quantityOfItems}
          <span className="visually-hidden">unread messages</span>
        </span>
      ) : ""}
    </span>
  );
};

export default CartWidget;