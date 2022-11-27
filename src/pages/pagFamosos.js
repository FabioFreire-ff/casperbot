import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Famosos from '../components/famosos';
import ListaFamosos from '../components/lists/listFamosos';

const NoticiasFamosos = () => {
    //ID Famosos
    const [idFamosos, setIdFamosos] = useState("");

    const getIdFamososHandler = (id) => {
        setIdFamosos(id);
    };

    return (
        <>
            <header>
                <h1 className='basico'>Famosos</h1>
                <Link to="/home">Home</Link>
            </header>

            <Famosos id={idFamosos} setIdFamosos={setIdFamosos} />
            <ListaFamosos getIdFamosos={getIdFamososHandler} />
        </>
    );
}

export default NoticiasFamosos;