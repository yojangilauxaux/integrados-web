import Header from "../components/Header";
import "./Choose.css";

const ChooseUs = () => {
    return (
        <div>
            <Header />
            <section className="choose-us">
                <div className="text-background">
                    <h1 className="title">¿Por qué elegirnos?</h1>
                    <p className="intro-text">
                        En nuestra empresa nos comprometemos a brindar un servicio de excelencia y confiabilidad. Aquí te contamos por qué somos tu mejor opción:
                    </p>
                    <ul className="reasons-list">
                        <li>
                            <strong>1. Personal Capacitado:</strong> Nuestro equipo está altamente entrenado en servicio al cliente, manejo de vehículos de todo tipo y mecánica básica, asegurando que tu experiencia sea segura y placentera.
                        </li>
                        <li>
                            <strong>2. Primera Impresión:</strong> Sabemos lo importante que es causar una buena impresión. Nuestros operarios siempre se presentan de forma profesional, cuidando cada detalle para que tu cliente o invitado se sienta especial desde el primer momento.
                        </li>
                        <li>
                            <strong>3. Tecnología Avanzada:</strong> Utilizamos equipos de última generación y herramientas de alta calidad, lo que nos permite ofrecerte un servicio eficiente, rápido y libre de contratiempos.
                        </li>
                        <li>
                            <strong>4. Compromiso con la Calidad:</strong> Trabajamos incansablemente para ofrecer el mejor servicio, siempre adaptándonos a tus necesidades y asegurándonos de superar tus expectativas.
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default ChooseUs;
