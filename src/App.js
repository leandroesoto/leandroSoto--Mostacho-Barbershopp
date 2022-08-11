import NavBar from './components/NavBar';
import ContentWrapper from './components/ContentWrapper';
import CartProvider from './context/CartContext';
import { doc, getDocs, getFirestore,  } from 'firebase/firestore';





function App() {
 
  return (
    <>
    <CartProvider>
      <NavBar/>
      <ContentWrapper/>
    </CartProvider>
    </>
  );
}

export default App;