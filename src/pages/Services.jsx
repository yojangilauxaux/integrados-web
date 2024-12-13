import Header from "../components/Header";
import React from 'react';
import './Service.css';

const Services = () => {
    return (
        <div>
            <Header />
            <section className="services">
                <div className="text-background">
                    <h2>Ofrecemos los siguientes servicios</h2>
                    <p>
                        Servicios para eventos empresariales (activaciones de marca, lanzamiento de productos o servicios, ferias nacionales),
                        fiestas privadas (matrimonios, aniversarios, cumpleaños, eventos campestres) y siendo aliados estratégicos para
                        todo tipo de clientes (bares, restaurantes, discotecas, hoteles).
                    </p>
                </div>
                <div className="service-items">
                    <div className="service-item">
                        <img src="/public/card3.png" alt="Valet Parking" className="service-image" />
                        <h3>Servicio OT Valet Parking</h3>
                        <p>
                            Recepción, estacionamiento y vigilancia de los vehículos de sus visitantes e invitados,
                            con una entrada y salida cómoda, ágil y segura.
                        </p>
                    </div>
                    <div className="service-item">
                        <img src="/public/card2.png" alt="Optimización zonas de parqueo" className="service-image" />
                        <h3>Optimización Zonas de Parqueo</h3>
                        <p>
                            Administramos los espacios de zonas de parqueo para sacar el mayor provecho posible
                            y aumentar su capacidad para una mejor experiencia.
                        </p>
                    </div>
                    <div className="service-item">
                        <img src="/public/card1.png" alt="Conductores Elegidos" className="service-image" />
                        <h3>Conductores Elegidos</h3>
                        <p>
                            Contamos con personal capacitado en conducción de vehículos y normas de tránsito
                            brindando toda la tranquilidad y seguridad a nuestros usuarios para que puedan disfrutar sin preocupaciones.
                        </p>
                    </div>
                    <div className="service-item">
                        <img src="/public/card4.png" alt="Transporte Privado" className="service-image" />
                        <h3>Transporte Privado</h3>
                        <p>
                            Ofrecemos el servicio de transporte de personas en vehículos de gama media y alta con conductores profesionales.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
