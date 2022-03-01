import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
// Authentication
const firebaseConfig = {
  apiKey: "AIzaSyAwx9wIAb4GiVXuViOISH0h8oQkYx0TCr4",
  authDomain: "coderhouse-62766.firebaseapp.com",
  projectId: "coderhouse-62766",
  storageBucket: "coderhouse-62766.appspot.com",
  messagingSenderId: "531865670215",
  appId: "1:531865670215:web:0a6b088adef33c06839762"
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Get a list of cities from your database
export async function getItems() {
  const db = getFirestore(app);
  const itemsCol = collection(db, 'items');
  const itemsSnap = await getDocs(itemsCol);
  const itemsList = itemsSnap.docs.map(doc => doc.data());
  return itemsList;
}

export const sendOrder = (buyer, order) => {
  const newOrder = {
    buyer: buyer,
    items: order, 
    total: Object.values(order).reduce((acc, item) => acc + (item.price * item.quantity), 0),
  }

  const db = getFirestore(app);
  const ordersCol = collection(db, 'orders');
  addDoc(ordersCol, newOrder).then((res) => {
    alert(`Order enviada. Order id: ${res.id}`);
  }).catch(err => {
    console.log('Error', err);
  });

}