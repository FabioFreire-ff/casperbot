import React, { useEffect, useState } from "react";
import FamososServices from "../../services/famososServ";

const ListaFamosos = ({ getIdFamosos }) => {
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        getNoticias();
    }, []);

    const getNoticias = async () => {
        const data = await FamososServices.getAllFamosos();
        setNoticias(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const deleteHandler = async (id) => {
        await FamososServices.deleteFamosos(id);
        getNoticias();
    };

    return (
        <>
            <div>
                <button onClick={getNoticias} >
                    Atualizar Lista
                </button>
            </div>
            <table>
                <tr>
                    <th>#</th>
                    <th>Título</th>
                    <th>Descrição</th>
                    <th>Link da notícia</th>
                    <th>Link da imagem</th>
                    <th>Ação</th>
                </tr>
                {noticias.map((doc, index) => {
                    return (
                        <tr key={doc.id}>
                            <td >{index + 1}</td>
                            <td>{doc.titulo}</td>
                            <td>{doc.descricao}</td>
                            <td>{doc.link}</td>
                            <td>{doc.linkimagem}</td>
                            <td>
                                <button
                                    
                                    onClick={(e) => getIdFamosos(doc.id)}
                                >
                                    Editar
                                </button>
                                <button
                                   
                                    onClick={(e) => deleteHandler(doc.id)}
                                >
                                    Deletar
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </table>
        </>
    );
};

export default ListaFamosos;