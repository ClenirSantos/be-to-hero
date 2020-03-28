import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Register()
{
    return (
            <div className="register-container">
                <div className="content">
                    <section>
                    <img src={logoImg} alt="Heroes" />
                    <h1>Cadastro</h1>
                        <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                        <Link className="back-link" to="/">
                            Voltar
                        </Link>
                    </section>
                </div>
            </div>
        );
}