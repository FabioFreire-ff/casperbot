import React, { useEffect, useState } from "react";
import PoliticaServices from "../../services/politicaServ";

const ListaPolitica = ({ getIdPolitica }) => {
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        getNoticias();
    }, []);

    const getNoticias = async () => {
        const data = await PoliticaServices.getAllPolitica();
        setNoticias(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const deleteHandler = async (id) => {
        await PoliticaServices.deletePolitica(id);
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
                            <td className="break">{index + 1}</td>
                            <td>{doc.titulo}</td>
                            <td>{doc.descricao}</td>
                            <td className="break">{doc.link}</td>
                            <td className="break">{doc.linkimagem}</td>
                            <td>
                                <button
                                     
                                    onClick={(e) => getIdPolitica(doc.id)}
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

export default ListaPolitica;