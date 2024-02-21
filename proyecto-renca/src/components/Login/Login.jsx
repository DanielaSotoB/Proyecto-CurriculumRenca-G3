import React, { useEffect } from 'react';
import './Login.css';

const LoginRegistro = () => {
    // Definir las funciones de los event listeners
    const handleRegisterClick = () => {
        container.classList.add("active");
    };

    const handleLoginClick = () => {
        container.classList.remove("active");
    };

    useEffect(() => {
        const container = document.getElementById('container');
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');

        // Agregar event listeners utilizando las funciones definidas anteriormente
        registerBtn.addEventListener('click', handleRegisterClick);
        loginBtn.addEventListener('click', handleLoginClick);

        // Limpia los event listeners cuando el componente se desmonta para evitar fugas de memoria
        return () => {
            registerBtn.removeEventListener('click', handleRegisterClick);
            loginBtn.removeEventListener('click', handleLoginClick);
        };
    }, []);

    const loguear = () => {
        // Función de inicio de sesión
        console.log('Iniciando sesión...');
    };

    return (
        <body id="login-body">
            <div className="container-login" id="container">
                <div className="form-container sign-up">
                    <form>
                        <h1>Crear Cuenta</h1>
                        <br />
                        <input type="text" placeholder="Usuario" />
                        <input type="email" placeholder="Correo Electrónico" />
                        <input type="password" placeholder="Contraseña" />
                        <button id="register">Registrarse</button>
                    </form>
                </div>
                <div className="form-container sign-in">
                    <form>
                        <h1>Ingresar</h1>
                        <br />
                        <input type="text" placeholder="Correo Electrónico" id="email" />
                        <input type="password" placeholder="Contraseña" id="password" />
                        <a href="#">¿Olvidaste tu contraseña?</a>
                        <button type="button" onClick={loguear}>Ingresar</button>
                    </form>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <img src="../img/logo-renca.png" width="150" alt="Renca logo" />
                            <h1>¡Regístrate en Currículum Renca!</h1>
                            <p>¿Ya tienes una cuenta?</p>
                            <button className="hidden" id="login">Ingresa a tu cuenta</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <img src="../img/logo-renca.png" width="150" alt="Renca logo" />
                            <h1>¡Bienvenido a Currículum Renca!</h1>
                            <p>Si no estás registrado, puedes hacerlo aquí</p>
                            <button className="hidden" id="register">Registrarse</button>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
};

export default LoginRegistro;
