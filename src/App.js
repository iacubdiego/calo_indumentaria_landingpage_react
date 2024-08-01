import React from 'react';
import { Router, Route } from "wouter";

import Home from "./pages/Home";
import Error from "./pages/Error";
import Nosotros from './pages/Nosotros';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Botas from './pages/Botas';
import Pantalones from './pages/Pantalones';
import Camisas from './pages/Camisas';

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/pantalones" component={Pantalones} />
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/botas" component={Botas} />
        <Route path="/camisas" component={Camisas} />
        <Route path="/*" component={Error} />
      </Router>

      <Footer />
    </>
  );
}

export default App;