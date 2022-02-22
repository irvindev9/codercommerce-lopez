import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from './components/NavBar';
import './App.css';
import RoutesComponent from './Routes/Routes';
import CartProvider from './context/CartContext';
import { useContext } from 'react';


function App() {
  const info = useContext(CartProvider);
  return (
    <div className="App">
      {info}
      <CartProvider>
        <RoutesComponent />
      </CartProvider>
    </div>
  );
}

export default App;
