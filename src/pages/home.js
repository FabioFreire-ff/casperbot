import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
  const navigate = useNavigate();

  function sair() {
    localStorage.clear()
    alert("Logout concluído!")
    navigate('/')
  }

  return (
    <div id='home' className='basico'>
      <h1>Casper - Notícias</h1>
      <button onClick={sair}>Sair</button>
      <nav>
        <ul>
          <li>
            <Link to="/entretenimento">Entretenimento</Link>
          </li>
          <li>
            <Link to="/esportes">Esportes</Link>
          </li>
          <li>
            <Link to="/famosos">Famosos</Link>
          </li>
          <li>
            <Link to="/politica">Politica</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;