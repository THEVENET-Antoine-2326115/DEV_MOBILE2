import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './Header.js';
import todos from './todos.json' ;
import Footer from './Footer.js';

function App() {
  const {taches}=todos;
  const {categories} = todos;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to RELOAD.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <b>
        <Bouton/>
        </b>
        <div className="App">
      <Header taches={taches} />
      <br />
      <br />
      <span style={{ fontsize: 'smaller'}}>
      {JSON.stringify(todos)}
      </span>
      <br />
      <br />
      {taches && taches.map(t => <div>{t.title}</div>)}
      <br />
      <br />
    </div>

    <div className="App">
    <Footer categories={categories} />
      <br />
      <br />
      <span style={{ fontsize: 'smaller'}}>
      {JSON.stringify(todos)}
      </span>
      <br />
      <br />
      {categories && categories.map(t => <div>{t.title}</div>)}
      <br />
      <br />
    </div>

      </header>
    </div>
  );
}

                                                                  

function Bouton() {
  const [appui, setAppui] = useState(0);

  function handleClick() {
    setAppui(appui + 1);
  }

  return (
    <button onClick={handleClick}>
      vous avez cliqué {appui} fois
    </button>
  );
}








export default App;
