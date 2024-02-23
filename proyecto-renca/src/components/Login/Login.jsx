import React, { useState } from 'react';
import { login } from "../../auth/auth";
import './Login.css';

const LoginRegistro = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const toggleForm = () => {
    setIsSignUp(!isSignUp);
    };

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
    );
};

export default LoginRegistro;
