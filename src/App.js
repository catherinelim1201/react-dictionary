import logo from "./logo.jpeg";
import './App.css';
import Dictionary from './Dictionary.js';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <main><Dictionary /></main>
        <small>
          <footer className="App-footer">Coded by Catherine</footer>
        </small>
      </div>
    </div>
  );
}

export default App;
