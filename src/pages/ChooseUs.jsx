import Header from "../components/Header";
import './Choose.css';

const ChooseUs = () => {
    return (
        <div>
            <Header />
            <section className="choose-us">
                <div className="text-background">
                    <h1>¿Por qué elegirnos?</h1>
                    <p>
                        <strong>1. </strong>
                        Contamos con personal debidamente capacitado en servicio y atención al cliente, conducción de todo tipo de vehículos y conocimientos de mecánica básica.
                    </p>
                    <p>
                        <strong>2. </strong>
                        Somos la primera y la última impresión que se van a llevar tus clientes e invitados, por lo tanto, la presentación personal de nuestros operarios es la mejor de la ciudad.
                    </p>
                    <p>
                        <strong>3. </strong>
                        Contamos con tecnología de punta e implementos de la mejor calidad que permiten una logística óptima de nuestros operarios.
                    </p>
                    <div className="references">
                        <h2>Referencias</h2>
                        <ul>
                            <li>Referencia 1: [Descripción o enlace]</li>
                            <li>Referencia 2: [Descripción o enlace]</li>
                            <li>Referencia 3: [Descripción o enlace]</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ChooseUs;
