import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom'
import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Incident()
{
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


                    <form>
                        <input placeholder="Titulo" />
                        <textarea placeholder="Descrição do Caso"></textarea>
                        <input placeholder="Valor" />
                        <button className="button" type="submit">Cadastrar</button>
                    </form>
                
                </div>
            </div>
        );
}