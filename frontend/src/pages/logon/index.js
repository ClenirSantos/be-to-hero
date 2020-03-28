import React from 'react';
import { Link } from 'react-router-dom';
//import { FiLogIn } from 'react-icons/fi';
import './styles.css';

import heroesimg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon()
{
    return (
        <div className="logon-container ">
            <session className="form">
            <img src={logoImg} alt="Heroes" />

            <form>
                <input placeholder="Sua ID" />
                <button className="button" type="submit">Entrar</button>

                
                <Link className="back-link" to="/register">
                    Não tenho cadastro
                </Link>
            </form>

            </session>
            <img src={heroesimg} alt="Heroes" />

        </div>
    );
}