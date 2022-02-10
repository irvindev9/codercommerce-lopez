import { createContext, useState } from 'react';


const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [info, setInfo] = useState("informacion");

    return <CartContext.Provider value={{ info, setInfo }}>{children}</CartContext.Provider>;
    
};

export default CartProvider;
    