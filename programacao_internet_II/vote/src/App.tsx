import React from 'react';
import logo from './assets/logo1.png';
import './App.css';
import { TopicosPage } from './pages/TopicosPage/TopicosPage'

function App() {
  return (
    <>
    <div className='App'>
        <header className='Header'>
        <img src={logo} alt="Logo da Empresa" className='logo'/>
        </header>
        <body>
          <div className = 'left-sidebar'>
            <h3 className='Settings'>Configurações</h3>
          </div>
          <div className='home'>
            <TopicosPage></TopicosPage>
          </div>
          <div className='right-sidebar'>
          </div>
        </body>
    </div>
    </>
  );
}

export default App;
