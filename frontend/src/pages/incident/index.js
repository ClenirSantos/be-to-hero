import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function Incident()
{

    const ongId = localStorage.getItem('ongId');

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        }
        try 
        {
            await api.post('incidents', data,
            {
                headers: {
                    Authorization: ongId,
                }
            });
            alert("Incidente Criado com Sucesso!");
            history.push('/profile');
            
        } catch(err)
        {
            alert("Ocorreu algum erro no processo.. tente novamente... ");
        }

    }

    return (
            <div className="incident-container">
                <div className="container">
                    <section>
                    <img src={logoImg} alt="Heroes" />
                    <h1>Novo Incidente</h1>
                    <p>Cadastre um novo Incidente.</p>

                        <Link className="back-link" to="/profile">
                           <FiArrowLeft color="#ff0000"></FiArrowLeft> Voltar
                        </Link>
                    </section>


                    <form onSubmit={handleNewIncident}>
                        <input placeholder="Titulo" 
                        value={title} 
                        onChange={e => setTitle(e.target.value)} 
                        />
                        <textarea placeholder="Descrição do Caso"
                            value={description} 
                            onChange={e => setDescription(e.target.value)} 
                         />
                        <input placeholder="Valor" 
                            value={value} 
                            onChange={e => setValue(e.target.value)}                         
                        />
                        <button className="button" type="submit">Cadastrar</button>
                    </form>
                
                </div>
            </div>
        );
}