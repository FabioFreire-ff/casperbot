import React, { useEffect, useState } from 'react';
import PoliticaServices from '../services/politicaServ';

const Politica = ({ id, setIdPolitica }) => {
    const [titulo, set_titulo] = useState("");
    const [descricao, set_descricao] = useState("");
    const [link, set_link] = useState("");
    const [linkimagem, set_linkimagem] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (titulo === "" || descricao === "" ||  link === "" || linkimagem === "") {
            alert("Preencha todos os campos!");
            return;
        }

        const newPoli = {
            titulo,
            descricao,
            link,
            linkimagem
        }

        try {
            if (id !== undefined && id !== "") {
                await PoliticaServices.updatePolitica(id, newPoli);
                setIdPolitica("");
                alert("Atualizado com sucesso");
            } else {
                await PoliticaServices.addPolitica(newPoli);
                alert("Adicionado com sucesso");
            }
        } catch (err) {
            alert(`Erro ${err.message}`)
        }

        set_titulo("");
        set_descricao("");
        set_link("");
        set_linkimagem("");
    }

    const editHandler = async () => {
        try {
            const docSnap = await PoliticaServices.getPolitica(id);
            set_titulo(docSnap.data().titulo);
            set_descricao(docSnap.data().descricao);
            set_link(docSnap.data().link);
            set_linkimagem(docSnap.data().linkimagem);
        } catch (err) {
            alert(`Erro ${err.message}`)
        }
    };

    useEffect(() => {
        if (id !== undefined && id !== "") {
            editHandler();
        }
    }, [id]);

    return (
        <div className='basico'>
            Titulo<input placeholder='Título da noticia: ' value={titulo} onChange={(event => {
                set_titulo(event.target.value);
            })} /><br />
            Descrição:<input placeholder='Descrição: ' value={descricao} onChange={(event => {
                set_descricao(event.target.value);
            })} /><br />
            Link da notícia:<input placeholder='Link da notícia: ' value={link} onChange={(event => {
                set_link(event.target.value);
            })} /><br />
            Link da imagem:<input placeholder='Link da imagem: ' value={linkimagem} onChange={(event => {
                set_linkimagem(event.target.value);
            })} />

            <div>
                <button onClick={handleSubmit} >
                    Adicionar / Atualizar
                </button>
            </div>
        </div>
    );
}

export default Politica;