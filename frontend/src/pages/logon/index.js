import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';

import heroesimg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon()
{
    const [id, setID] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        try {
            const response =  await api.post('sessions', {id});

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.ong.name);
            history.push('/profile');

        } catch(err)
        {
            alert(`Falha no login: ${err}`);
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
            <img src={logoImg} alt="Heroes" />

            <form onSubmit={handleLogin}>
                <input placeholder="Sua ID" 
                value={id}
                onChange={e => setID(e.target.value)}
                />
                <button className="button" type="submit">Entrar</button>

                
                <Link className="back-link" to="/register">
                    <FiLogIn color="#ff0000"></FiLogIn> Não tenho cadastro
                </Link>
            </form>

            </section>
            <img src={heroesimg} alt="Heroes" />

        </div>
    );
}