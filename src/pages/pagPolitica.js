import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ListaPolitica from '../components/lists/listPolitica';
import Politica from '../components/politica';

const NoticiasPolitica = () => {
    //ID Politica
    const [idPolitica, setIdPolitica] = useState("");

    const getIdPoliticaHandler = (id) => {
        setIdPolitica(id);
    };

    return (
        <>
            <header>
                <h1 className='basico'>Política</h1>
                <Link to="/home">Home</Link>
            </header>

            <Politica id={idPolitica} setIdPolitica={setIdPolitica} />
            <ListaPolitica getIdPolitica={getIdPoliticaHandler} />
        </>
    );
}

export default NoticiasPolitica;