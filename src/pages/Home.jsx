import React from "react";
import Header from "../components/Header";
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
                    <a href="https://www.instagram.com/otvaletparkingmed?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
                    </a>
                    <a href="https://wa.me/3163290917" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
                    </a>
                    <a href="https://www.facebook.com/otvaletparking/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;
