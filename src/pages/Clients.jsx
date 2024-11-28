import React from "react";
import Header from "../components/Header";
import "./Clients.css";

const Clients = () => {
    const clientLogos = [
        { src: "/public/logo myb.png", alt: "Client 1" },
        { src: "/public/logoPark.png", alt: "Client 2" },
        { src: "/public/logoZona.png", alt: "Client 3" },
        { src: "/public/logoSombra.png", alt: "Client 4" },
        { src: "/public/logoAros.png", alt: "Client 5" },
        { src: "/public/logoCuento.png", alt: "Client 6" },
        { src: "/public/logoGroup.png", alt: "Client 6" },
        { src: "/public/logoAzul.png", alt: "Client 6" },

    ];

    return (
        <div>
            <Header />
            <section className="clients">
                <div className="clients-header">
                    <h1>Nuestros Clientes</h1>
                    <p>
                        Estas son algunas de las empresas que confían en nuestros servicios.
                    </p>
                </div>
                <div className="clients-container">
                    {clientLogos.map((client, index) => (
                        <div className="client-card" key={index}>
                            <img src={client.src} alt={client.alt} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Clients;
