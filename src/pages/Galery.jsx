import React from "react";
import Header from "../components/Header";
import "./galery.css";

const Galery = () => {
    const images = [
        "/public/card3.png",
        "/public/galery1.png",
        "/public/galery6.png",
        "/public/galery3.png",
        "/public/galery4.png",
        "/public/galery5.png",
        "/public/galery3.png",
        "/public/galery7.png",
        "/public/galery8.png",
        "/public/galery9.png",
        "/public/galery10.png",
        "/public/galery11.png",
        "/public/galery12.png",
        "/public/galery13.png",
        "/public/galery14.png",

    ];

    return (
        <div>
            <Header />
            <section className="galery">
                <div className="galery-header">
                    <h1>Nuestra Galería</h1>
                    <p>
                        Explora nuestras imágenes destacadas y conoce más sobre nosotros.
                    </p>
                </div>
                <div className="galery-container">
                    {images.map((src, index) => (
                        <div className="card" key={index}>
                            <img src={src} alt={`Image ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Galery;
