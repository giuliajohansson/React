import React from 'react';
import '../App.css'
import { useNavigate } from 'react-router-dom';
import Sobre from '../componentes/Sobre'
import Header from '../componentes/Header'
import Image from '../componentes/Image'
import Galeria from '../componentes/Galeria'
import Galeria2 from '../componentes/Galeria2'

function Home() {
 // Obtém a função de navegação usando o hook useNavigate
    const irPara= useNavigate();
  // Define a função handleClick que será chamada ao clicar no botão
  const handleClick = () => {
    // Navegar para a página Sobre ao clicar em algum botão
    irPara('/sobre');
  };


  return (
    <div>
      <Header/>
      <Image/>
      <button onClick={handleClick}>
        Saiba mais
      </button>
      <Sobre/>
      <Galeria/>
      <Galeria2/>
    </div>
  )
}

export default Home
