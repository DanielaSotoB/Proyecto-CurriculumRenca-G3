import React, { useState } from 'react';
import './Login.css';
import axios from 'axios'; // Importa axios para realizar solicitudes HTTP

const LoginRegistro = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSignUp) {
            // Registro
            try {
                const response = await axios.post('/api/register', formData); // Cambia la URL por la ruta de registro en tu backend
                console.log(response.data); // Maneja la respuesta del backend según sea necesario
            } catch (error) {
                console.error('Error al registrar:', error);
            }
        } else {
            // Inicio de sesión
            try {
                const response = await axios.post('/api/login', formData); // Cambia la URL por la ruta de inicio de sesión en tu backend
                console.log(response.data); // Maneja la respuesta del backend según sea necesario
            } catch (error) {
                console.error('Error al iniciar sesión:', error);
            }
        }
    };

    return (
        <body id="login-body">  
            <div className={`container-login2 ${isSignUp ? 'active' : ''}`} id="container-login2">
                <div className="form-container-login2 sign-up">
                    <form onSubmit={handleSubmit}>
                        <h1>Crear Cuenta</h1>
                        <br />
                        <input type="text" placeholder="Usuario" name="username" value={formData.username} onChange={handleChange} />
                        <input type="email" placeholder="Correo Electrónico" name="email" value={formData.email} onChange={handleChange} />
                        <input type="password" placeholder="Contraseña" name="password" value={formData.password} onChange={handleChange} />
                        <button type="submit">Registrarme</button>
                    </form>
                </div>
                <div className="form-container-login2 sign-in">
                    <form onSubmit={handleSubmit}>
                        <h1>Ingresar</h1>
                        <br />
                        <input type="email" placeholder="Correo Electrónico" name="email" value={formData.email} onChange={handleChange} />
                        <input type="password" placeholder="Contraseña" name="password" value={formData.password} onChange={handleChange} />
                        <a href="#">¿Olvidaste tu contraseña?</a>
                        <button type="submit">Ingresar</button>
                    </form>
                </div>
                <div className="toggle-container-login2">
                    <div className="toggle">
                        <div className={`toggle-panel toggle-left ${isSignUp ? '' : 'active'}`}>
                            <img src="../img/logo-renca.png" width="150" alt="Renca logo" />
                            <h1>¡Regístrate en Currículum Renca!</h1>
                            <p>¿Ya tienes una cuenta?</p>
                            <button className="hidden" id="login" onClick={toggleForm}>Ingresa a tu cuenta</button>
                        </div>
                        <div className={`toggle-panel toggle-right ${isSignUp ? 'active' : ''}`}>
                            <img src="../img/logo-renca.png" width="150" alt="Renca logo" />
                            <h1>¡Bienvenido a Currículum Renca!</h1>
                            <p>Si no estás registrado, puedes hacerlo aquí</p>
                            <button className="hidden" id="register" onClick={toggleForm}>Registrarse</button>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
};

export default LoginRegistro;
