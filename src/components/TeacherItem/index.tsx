import React from 'react';

import whatsIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/65261621?s=400&v=4" alt="Rafael de Moraes Santos" />
                        <div>
                            <strong>Rafael de Moraes Santos</strong>
                            <span>Programação</span>
                        </div>
                    </header>
                    <p>
                        Programado Full Stack front e back.
                        <br/><br/>
                        Apaixonado por tecnologia em geral, porém, focado em programação e solucionar problemas usando código.
                    </p>
                    
                    <footer>
                        <p>
                            Preço/hora
                                <strong>R$ 145,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsIcon} alt="Entrar em contato via WhatsApp" />
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    );
}

export default TeacherItem;