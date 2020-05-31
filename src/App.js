import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Noticias from './components/noticias/Noticias'
import NoticiaCompleta from './components/noticiacompleta/NoticiaCompleta'
import Sobre from './components/sobre/Sobre'
import Footer from './components/footer/Footer'


import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
            <Route exact path="/" component={Noticias} />
            <Route path="/sobre" component={Sobre} />
            <Route path="/noticia"component={NoticiaCompleta} />
            <Route path="*">
              <div>404 not found</div>
            </Route>
          </Switch>
        <Footer />
      </div>
    </Router>
   

  );
}

export default App;
