import NavBar from './components/NavBar';
import ContentWrapper from './components/ContentWrapper';
import CardContext from './context/CardContext';

function App() {
 
  return (
    <>
    <CardContext.Provider value={[]}>
      <NavBar/>
      <ContentWrapper/>
    </CardContext.Provider>
    </>
  );
}

export default App;