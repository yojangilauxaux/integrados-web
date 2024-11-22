import React from "react";
import Header from "../components/Header";
import "./Clients.css";

const Clients = () => {
    const clientLogos = [
        { src: "https://via.placeholder.com/300x150?text=Client+1", alt: "Client 1" },
        { src: "https://via.placeholder.com/300x150?text=Client+2", alt: "Client 2" },
        { src: "https://via.placeholder.com/300x150?text=Client+3", alt: "Client 3" },
        { src: "https://via.placeholder.com/300x150?text=Client+4", alt: "Client 4" },
        { src: "https://via.placeholder.com/300x150?text=Client+5", alt: "Client 5" },
        { src: "https://via.placeholder.com/300x150?text=Client+6", alt: "Client 6" },
        { src: "https://via.placeholder.com/300x150?text=Client+6", alt: "Client 6" },
        { src: "https://via.placeholder.com/300x150?text=Client+6", alt: "Client 6" },

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
