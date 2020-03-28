import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile()
{
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be To Hero"></img>
                <span>Bem vindo, APAD</span>
                <Link className="button" to="/incident">Cadastrar Novo Caso</Link>
                <button type="button">
                    <FiPower size={18} color="#ff0000"></FiPower>
                </button>
            </header>
            <h1>Casos</h1>
            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição Teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button"><FiTrash2 size={20} color="#a8a8a3"></FiTrash2></button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição Teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button"><FiTrash2 size={20} color="#a8a8a3"></FiTrash2></button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição Teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button"><FiTrash2 size={20} color="#a8a8a3"></FiTrash2></button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição Teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button"><FiTrash2 size={20} color="#a8a8a3"></FiTrash2></button>
                </li>
            </ul>
        </div>
    );
}