import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Header from './Header.js';
import todos from './todos.json' ;
import Footer from './Footer.js';
import etats from './etats.js';
import Section from "./Section";


function App() {
    const {taches} = todos;
    const {categories} = todos;
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
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
                    <Section>
                        <Header taches={taches}/>
                        <b>
                            <Form/>
                        </b>
                        <br/>
                        <br/>
                        <Section>
                            {taches && taches.map(t => <div>{t.title}</div>)}
                        </Section>
                        <br/>
                        <br/>
                    </Section>
                </div>

                <div className="App">
                    <Section>
                        <Footer categories={categories}/>
                        <b>
                            <Form/>
                        </b>
                        <br/>
                        <br/>
                        <Section>
                            {categories && categories.map(t => <div>{t.title}</div>)}
                        </Section>
                        <br/>
                        <br/>
                    </Section>
                </div>

            </header>
        </div>
    );
}
//IL FAUT QUE J'UTILISE MAP ET FILTER UTILISER LES ONGLETS COMPLEMENTS WEB!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//L'onglet contient le nom tache, la date ou autre info, puis un onglet pour changre l'etat!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/*function Ajout_tache_bouton(){
 const [appui, setAppui] = useState(0);

 function handleClick(){
     setAppui(appui)
 }
 return (
  <button onClick={handleClick}>
           <div>
           {taches = nbTaches.Taches}

        </div>

  </button>
 );
}*/


function TitreTache(){
    const[tache, setTache] = useState({
        taches: todos.map(t => t.title),
    });

}




function Form() {
    const [form, setForm] = useState({
        tache: 'Nouvelle tâche',

    });
    return (
        <>
            <label>
                tache:
                <input
                    value={form.tache}
                    onChange={e => {
                        setForm({
                            ...form,
                            tache: e.target.value
                        });
                    }}
                />
            </label>
            <p>
                <input type="submit" value="ajouter tâche" onClick={handleClick}>
                </input>
            </p>
        </>
    );

    function handleClick() {
        let temp = form;
    }
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


//<span style={{ fontsize: 'smaller'}}>
//       {JSON.stringify(todos)}
//       </span>

//<span style={{fontsize: 'smaller'}}>
//       {JSON.stringify(todos)}
//       </span>


export default App;
