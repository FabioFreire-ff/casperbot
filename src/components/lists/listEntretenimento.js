import React, { useEffect, useState } from "react";
import EntretenimentoServices from "../../services/entretenimentoServ";

const ListaEntretenimento = ({ getIdEntretenimento }) => {
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        getNoticias();
    }, []);

    const getNoticias = async () => {
        const data = await EntretenimentoServices.getAllEntretenimento();
        setNoticias(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const deleteHandler = async (id) => {
        await EntretenimentoServices.deleteEntretenimento(id);
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
                <tbody>
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
                                    
                                        onClick={(e) => getIdEntretenimento(doc.id)}
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
                </tbody>
            </table>
        </>
    );
};

export default ListaEntretenimento;