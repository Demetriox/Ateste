import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './Components/Shared/Navi';
import Inicio from './Components/Inicio/Inicio';
import Proyecto from './Components/Proyectos/Proyectos';
import Nosotros from './Components/Nosotros/Nosotros';
import Footer from './Components/Shared/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Galeria from './Components/Galeria/Galeria';
import Contactanos from './Components/Contactanos/Contactanos';


function App() {
  return (

    <div className="App">
      <Router>
        <Navi />
        <Switch>
          <Route path="/" exact component={Inicio} />
          {/* <Route path="/Contacto" exact component={Contacto} /> */}
          <Route path="/Proyectos" exact component={Proyecto} />
          <Route path="/Nosotros" component={Nosotros} />
          <Route path="/Galeria" exact component={Galeria} />
          <Route path="/Contactanos" exact component={Contactanos} />
        </Switch>
        <Footer />

      </Router>
    </div>
  );
}

export default App;
