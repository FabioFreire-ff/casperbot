import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './admin.css';


const Admin = () => {
    const [pin, setPin] = useState("");
    const navigate = useNavigate();

    function acesso() {
        if (pin == "administradordenoticiaselife2022") {
            localStorage.setItem('state', 'true')
            navigate('/home');
        }
        else {
            alert("PIN incorreto");
        }
    }

    return (
        <div id='login' className='basico'>
            <h1>Painel de Notícias - Login. </h1>
            
            <div className='chavepin'>
                Chave PIN: <input type="password" placeholder="Digite aqui seu pin..." onChange={(e) => setPin(e.target.value)} />
                <button onClick={acesso}>Entrar</button>
            </div>
        </div>
    );
}

export default Admin;