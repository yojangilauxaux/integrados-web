
import React, { useState } from 'react';  
import './Register.css';  
import Swal from 'sweetalert2'; 
import { createUserWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../../firebaseConfig';  
const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

      
        if (password === confirmPassword) {
           
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                
                    Swal.fire({
                        title: '¡Registro Exitoso!',
                        text: 'Ahora puedes iniciar sesión con tu cuenta.',
                        icon: 'success',
                        confirmButtonText: 'Aceptar',
                    }).then(() => {
                      e
                        window.location.href = "/login"; 
                    });
                })
                .catch((error) => {
                   
                    Swal.fire({
                        title: '¡Error!',
                        text: error.message,
                        icon: 'error',
                        confirmButtonText: 'Aceptar',
                    });
                });
        } else {
            Swal.fire({
                title: '¡Error!',
                text: 'Las contraseñas no coinciden. Intenta nuevamente.',
                icon: 'error',
                confirmButtonText: 'Aceptar',
            });
        }
    };

    return (
        <div className="register-container">
            <div className="register-form">
                <h2>Crear Cuenta</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Introduce tu correo"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Introduce tu contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirma tu contraseña"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="register-btn">Registrarse</button>
                </form>
                <p>Ya tienes cuenta? <a href="/login">Inicia sesión aquí</a></p>
            </div>
        </div>
    );
};

export default Register;
