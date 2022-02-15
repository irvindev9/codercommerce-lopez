import React from 'react';
import NavBar from '../components/NavBar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import CartContainer from '../components/CartContainer';

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route exact path="/cart" element={<CartContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
