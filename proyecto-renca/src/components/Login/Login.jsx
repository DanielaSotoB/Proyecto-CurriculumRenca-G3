import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Importa useHistory desde react-router-dom
import './Login.css';

const LoginRegistro = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory(); // Obtén el objeto history

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    const handleUsuarioChange = (event) => {
        setUsuario(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const registrarUsuario = async () => {
        try {
            // Tu código de registro de usuario aquí
            // Aquí se supone que recibirías una respuesta exitosa del backend

            // Redirige al usuario a la página después del registro exitoso
            history.push('/ruta-despues-del-registro');
        } catch (error) {
            console.error('Error al registrar usuario:', error);
        }
    };

    const iniciarSesion = async () => {
        try {
            // Tu código de inicio de sesión aquí
            // Aquí se supone que recibirías una respuesta exitosa del backend

            // Redirige al usuario a la página después del inicio de sesión exitoso
            history.push('/ruta-despues-del-inicio-de-sesion');
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };

    return (
        <body id="login-body">  
            <div className={`container-login2 ${isSignUp ? 'active' : ''}`} id="container-login2">
                <div className="form-container-login2 sign-up">
                    <form>
                        <h1>Crear Cuenta</h1>
                        <br />
                        <input type="text" placeholder="Usuario" value={usuario} onChange={handleUsuarioChange} />
                        <input type="email" placeholder="Correo Electrónico" value={email} onChange={handleEmailChange} />
                        <input type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} />
                        <button type="button" onClick={registrarUsuario}>Registrarme</button>
                    </form>
                </div>
                <div className="form-container-login2 sign-in">
                    <form>
                        <h1>Ingresar</h1>
                        <br />
                        <input type="email" placeholder="Correo Electrónico" value={email} onChange={handleEmailChange} />
                        <input type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} />
                        <a href="#">¿Olvidaste tu contraseña?</a>
                        <button type="button" onClick={iniciarSesion}>Ingresar</button>
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
