import React, { useState } from 'react';
// import { login } from "../../auth/auth";
import './Login.css';
import axios from 'axios'; // Importa axios para realizar solicitudes HTTP

const LoginRegistro = () => {
    const [isSignUp, setIsSignUp] = useState(true);
<<<<<<< HEAD
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
=======
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
>>>>>>> 60522f5c4bb9101b46adc12803e0d2bc131d5ada

    const toggleForm = () => {
    setIsSignUp(!isSignUp);
    };

<<<<<<< HEAD
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
=======
    const handleLogin = async () => {
    try {
        const token = await login({ email, password }); 
        console.log('Iniciando sesión... Token:', token);
        
    } catch (error) {
        console.error('Error de inicio de sesión', error);
    }
    };

    const handleSignUp = () => {
    // Lógica para el registro de usuarios
    console.log('Registrando usuario...');
    };

    return (
    <body id="login-body">
        <div className={`container-login2 ${isSignUp ? 'active' : ''}`} id="container-login2">
        <div className="form-container-login2 sign-up">
            <form>
            <h1>Crear Cuenta</h1>
            <br />
            <input type="text" placeholder="Usuario" />
            <input
                type="email"
                placeholder="Correo Electrónico"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" onClick={handleSignUp}>Registrarme</button>
            </form>
        </div>
        <div className="form-container-login2 sign-in">
            <form>
            <h1>Ingresar</h1>
            <br />
            <input
                type="text"
                placeholder="Correo Electrónico"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
            />
            <a href="#">¿Olvidaste tu contraseña?</a>
            <button type="button" onClick={handleLogin}>Ingresar</button>
            </form>
        </div>
        <div className="toggle-container-login2">
            <div className="toggle">
            <div className={`toggle-panel toggle-left ${isSignUp ? '' : 'active'}`}>
                <img src="../img/logo-renca.png" width="150" alt="Renca logo" />
                <h1>¡Regístrate en Currículum Renca!</h1>
                <p>¿Ya tienes una cuenta?</p>
                <button className="hidden" id="login" onClick={toggleForm}>
                Ingresa a tu cuenta
                </button>
            </div>
            <div className={`toggle-panel toggle-right ${isSignUp ? 'active' : ''}`}>
                <img src="../img/logo-renca.png" width="150" alt="Renca logo" />
                <h1>¡Bienvenido a Currículum Renca!</h1>
                <p>Si no estás registrado, puedes hacerlo aquí</p>
                <button className="hidden" id="register" onClick={toggleForm}>
                Registrarse
                </button>
                </div>
            </div>
            </div>
        </div>
    </body>
>>>>>>> 60522f5c4bb9101b46adc12803e0d2bc131d5ada
    );
};

export default LoginRegistro;
