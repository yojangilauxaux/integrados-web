import Header from '../components/Header';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header />
            <section className="home encabezado">
                <div className="content">
                    <h1 className='h1home'>Bienvenido a OtValeParking</h1>
                    <p className='phome'>Explora nuestros servicios y conoce más sobre nosotros.</p>
                </div>

                {/* Sección para los íconos */}
                <div className="social-icons">
                    <a href="https://www.instagram.com/tu_usuario" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="https://wa.me/tu_numero" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-whatsapp"></i>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;
