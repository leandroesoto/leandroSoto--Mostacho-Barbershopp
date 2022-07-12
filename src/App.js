import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          esta es mi aplicación con react.
        </p>
        <a
          className="App-link"
          href="https://github.com/leandroesoto/shopp-leandroSoto"
          target="_blank"
          rel="noopener noreferrer"
        >
          ir al repo en Github
        </a>
      </header>
    </div>
  );
}

export default App;
