import Header from '../components/Header';
import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <Header />
            <section className="about">
                <div className="about-content">
                    <h2 className='h2about'>¿Quiénes Somos?</h2>
                    <p className='pabout'>Somos una compañía de valet parking ubicada en la ciudad de Medellín con más de 8 años de experiencia. Contamos con un amplio portafolio de servicios que se complementan a la perfección para ofrecer a clientes e invitados una experiencia única que hacen de OT Valet Parking la mejor opción del mercado.</p>
                </div>
                <div className="about-images">
                    <img src="/public/nosotros1.png" alt="Descripción de la imagen 1" className="about-image" />
                    <img src="/public/nosotros2.png" alt="Descripción de la imagen 2" className="about-image" />
                </div>
            </section>
        </div>
    );
};

export default About;
