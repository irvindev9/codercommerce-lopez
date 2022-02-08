import React from 'react';
import NavBar from '../components/NavBar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route exact path="/details/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
