import React from 'react';
import './App.css';
import Header from './components/header/Header.jsx'
import Noticias from './components/noticias/Noticias.jsx'
import NoticiaCompleta from './components/noticiacompleta/NoticiaCompleta.jsx'
import Sobre from './components/sobre/Sobre.jsx'
import Footer from './components/footer/Footer.jsx'


import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    
    <Router>
      <div className="App">
        
        <Header/>
        <Switch>
            <Route exact path="/" component={Noticias} />
            <Route path="/sobre" component={Sobre} />
            <Route path="/noticia/:id"component={NoticiaCompleta} />
            <Route path="*">
              <div>404 not found</div>
            </Route>
          </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
   

  );
}

export default App;
