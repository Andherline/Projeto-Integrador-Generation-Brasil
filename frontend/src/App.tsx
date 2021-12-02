import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/estaticos/navbar/NavBar';
import Home from './paginas/home/Home';
import Footer from './componentes/estaticos/footer/Footer';

function App() {
  return (
      <>
        <NavBar />
        <Home />
        <Footer />
      </>
  );
}

export default App;
