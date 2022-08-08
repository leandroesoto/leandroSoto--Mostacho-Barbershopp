import NavBar from './components/NavBar';
import ContentWrapper from './components/ContentWrapper';
import CartProvider from './context/CartContext';

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