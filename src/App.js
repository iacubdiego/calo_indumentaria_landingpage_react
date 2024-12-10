import React from 'react';
import { Router, Route } from "wouter";

import Home from "./pages/Home";
import Error from "./pages/Error";
import Nosotros from './pages/Nosotros';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Calzado from './pages/Calzado';
import Seguridad from './pages/Seguridad';
import Indumentaria from './pages/Indumentaria';

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/Seguridad" component={Seguridad} />
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/Calzado" component={Calzado} />
        <Route path="/Indumentaria" component={Indumentaria} />
        <Route path="/*" component={Error} />
      </Router>

      <Footer />
    </>
  );
}

export default App;