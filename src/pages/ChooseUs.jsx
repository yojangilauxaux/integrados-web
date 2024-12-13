import Header from "../components/Header";
import "./Choose.css";
import React from 'react'; 

const ChooseUs = () => {
    const reasons = [
        {
            title: "Personal Capacitado",
            description: "Nuestro equipo está altamente entrenado en servicio al cliente, manejo de vehículos de todo tipo y mecánica básica, asegurando que tu experiencia sea segura y placentera.",
            icon: "👨‍🔧",
        },
        {
            title: "Primera Impresión",
            description: "Sabemos lo importante que es causar una buena impresión. Nuestros operarios siempre se presentan de forma profesional, cuidando cada detalle para que tu cliente o invitado se sienta especial desde el primer momento.",
            icon: "✨",
        },
        {
            title: "Tecnología Avanzada",
            description: "Utilizamos equipos de última generación y herramientas de alta calidad, lo que nos permite ofrecerte un servicio eficiente, rápido y libre de contratiempos.",
            icon: "🔧",
        },
        {
            title: "Compromiso con la Calidad",
            description: "Trabajamos incansablemente para ofrecer el mejor servicio, siempre adaptándonos a tus necesidades y asegurándonos de superar tus expectativas.",
            icon: "🏆",
        },
    ];

    return (
        <div>
            <Header />
            <section className="choose-us">
                <div className="text-background">
                    <h1 className="title">¿Por qué elegirnos?</h1>
                    <p className="intro-text">
                        En nuestra empresa, nos esforzamos por ofrecer un servicio que destaque en excelencia, confianza y profesionalismo. Estas son nuestras fortalezas:
                    </p>
                    <div className="reasons-container">
                        {reasons.map((reason, index) => (
                            <div className="reason-card" key={index}>
                                <div className="icon">{reason.icon}</div>
                                <h3 className="reason-title">{reason.title}</h3>
                                <p className="reason-description">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ChooseUs;
