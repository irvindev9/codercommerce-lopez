import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';

const items = [
  {
    name: 'Item 1',
    price: '$1.00'
  },
  {
    name: 'Item 2',
    price: '$2.00'
  },
  {
    name: 'Item 3',
    price: '$3.00'
  },
]


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer items={items} />
    </div>
  );
}

export default App;
