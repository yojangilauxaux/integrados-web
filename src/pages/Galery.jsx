import Header from "../components/Header";
import './Galery.css';

const Galery = () => {
    return (
        <div>
            <Header />
            <section className="gallery">
                <h1>Galería de Imágenes</h1>
                <div className="gallery-content">
                    <img src="public/img1.jpg" alt="Descripción 1" />
                    <img src="public/img2.jpg" alt="Descripción 2" />
                    <img src="public/img3.jpg" alt="Descripción 3" />
                    <img src="/public/.jpg" alt="Descripción 4" />
                    <img src="/public/.jpg" alt="Descripción 5" />
                    <img src="/public/.jpg" alt="Descripción 6" />
                    <img src="/public/.jpg" alt="Descripción 7" />
                    <img src="/public/.jpg" alt="Descripción 8" />
                    <img src="/public/.jpg" alt="Descripción 8" />
                    <img src="/public/.jpg" alt="Descripción 8" />
                    <img src="/public/.jpg" alt="Descripción 8" />
                </div>

            </section>
        </div>
    );
}

export default Galery;