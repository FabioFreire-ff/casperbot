import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Entretenimento from '../components/entretenimento';
import ListaEntretenimento from '../components/lists/listEntretenimento';

const NoticiasEntretenimento = () => {
    //ID Entretenimento
    const [idEntretenimento, setIdEntretenimento] = useState("");

    const getIdEntretenimentoHandler = (id) => {
        setIdEntretenimento(id);
    };

    return (
        <>
            <header>
                <h1 className='basico'>Entretenimento</h1>
                <Link to="/home">Home</Link>
                
            </header>

            <Entretenimento id={idEntretenimento} setIdEntretenimento={setIdEntretenimento} />
            <ListaEntretenimento getIdEntretenimento={getIdEntretenimentoHandler} />
        </>
    );
}

export default NoticiasEntretenimento;