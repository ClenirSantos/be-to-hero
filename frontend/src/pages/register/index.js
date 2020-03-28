import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

export default function Register()
{
    return (
            <div className="register-container">
                <div className="container">
                    <section>
                    <img src={logoImg} alt="Heroes" />
                    <h1>Cadastro</h1>
                        <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>


                        <Link className="back-link" to="/">
                           <FiArrowLeft color="#ff0000"></FiArrowLeft> Voltar
                        </Link>
                    </section>


                    <form>
                        <input placeholder="Nome da ONG" />
                        <input type="email" placeholder="E-mail"/>
                        <input placeholder="WhatsApp" />

                        <div className="input-group">
                            <input placeholder="Cidade" />
                            <input placeholder="UF" style={{width: 80}}/>
                        </div>

                        <button className="button" type="submit">Cadastrar</button>
                    </form>
                
                </div>
            </div>
        );
}