import React from 'react';
// Importa módulos específicos do pacote react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importa o componente Home da pasta 'pages'
import Home from './pages/cachorrinhos';
// Importa o componente Sobre da pasta 'pages'
import Sobre from './pages/sobre';


function App() {

  return (
    <Router>
      {/* Define as rotas usando o componente Router */}
      <Routes>
        {/* Rota para a página Home com o componente associado */}
      <Route path="/" element={<Home />} />
      {/*Rota para a página About com o componente associado*/}
      <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
  )
}

export default App
