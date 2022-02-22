import items from "../resources/items";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getItems } from '../utils/firebase';

export const ItemDetailContainer = () => {
  const { id } = useParams();
  
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItems().then(response => {
      setItem(response[id]);
    });
  }, []);


  return (
    <div className="container">
      <h1>ItemDetailContainer</h1>
      <div className="row">	
      { item !== null ? (
        <ItemDetail item={item} />
      ) : (
        <div>Cargando...</div>
      )}
      </div>
    </div>
  );
}

export default ItemDetailContainer;