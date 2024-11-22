import React from "react";
import Header from "../components/Header";
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <Header />
            <section className="contact">
                <div className="contact-header">
                    <h1>Contáctanos</h1>
                    <p>Estamos aquí para ayudarte. Conéctate con nosotros a través de cualquiera de nuestros canales.</p>
                </div>
                <div className="contact-icons">
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="contact-icon">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
                    </a>

                    <a href="https://www.facebook.com/empresa" target="_blank" rel="noopener noreferrer" className="contact-icon">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/empresa" target="_blank" rel="noopener noreferrer" className="contact-icon">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Contact;
