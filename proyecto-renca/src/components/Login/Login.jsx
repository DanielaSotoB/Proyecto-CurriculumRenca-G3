import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

const LoginRegistro = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        password: ''
    });
    const [isSignUp, setIsSignUp] = useState(true);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isSignUp) {
                // Registro
                const response = await axios.post('http://localhost:4000/api/usuarios/crear-usuario', formData);

                console.log('Registro exitoso:', response.data);
            } else {
                // Inicio de sesión
                const response = await axios.get('http://localhost:4000/api/usuarios/listar-usuarios/');
                console.log('Inicio de sesión exitoso:', response.data);
            }
        } catch (error) {
            console.error('ERRO:', error);
        }
    };
    

    return (
        <div className={`container-login2 ${isSignUp ? 'active' : ''}`} id="container-login2">
            <div className="form-container-login2 sign-up">
                <form onSubmit={handleSubmit}>
                    <h1>{isSignUp ? 'Crear Cuenta' : 'Ingresar'}</h1>
                    <br />
                    {isSignUp && <input type="text" placeholder="Usuario" name="nombre" value={formData.nombre} onChange={handleChange} />}
                    <input type="correo" placeholder="Correo Electrónico" name="correo" value={formData.correo} onChange={handleChange} />
                    <input type="password" placeholder="Contraseña" name="password" value={formData.password} onChange={handleChange} />
                    <button type="submit">{isSignUp ? 'Registrarme' : 'Ingresar'}</button>
                </form>
            </div>
            <div className="toggle-container-login2">
                <div className="toggle">
                    <div className={`toggle-panel toggle-left ${isSignUp ? '' : 'active'}`}>
                        <h1>¡Regístrate en Currículum Renca!</h1>
                        <p>¿Ya tienes una cuenta?</p>
                        <button className="hidden" id="login" onClick={toggleForm}>Ingresa a tu cuenta</button>
                    </div>
                    <div className={`toggle-panel toggle-right ${isSignUp ? 'active' : ''}`}>
                        <h1>¡Bienvenido a Currículum Renca!</h1>
                        <p>Si no estás registrado, puedes hacerlo aquí</p>
                        <button className="hidden" id="register" onClick={toggleForm}>Registrarse</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginRegistro;
