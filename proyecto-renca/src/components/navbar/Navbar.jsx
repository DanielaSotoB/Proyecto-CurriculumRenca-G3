import React, { useState, useEffect } from 'react';
import { IoSunnyOutline, IoMoonOutline, IoResize } from 'react-icons/io5';
import './modooscuro.css';

const Navbar = () => {
    // Estado para el modo oscuro
    const [darkMode, setDarkMode] = useState(false);

    // Función para cambiar el estado del modo oscuro
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Efecto para aplicar el modo oscuro al body cuando cambia el estado
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    // Función para aumentar el tamaño del texto
    const aumentarTexto = () => {
        document.documentElement.style.fontSize = 'larger';

    };

    
    return (
        <>
            <header className={`header--featured row mt-4 mb-1 mx-4 d-none d-md-flex ${darkMode ? 'dark-mode' : ''}`}>
                <div className="col-4 col-lg-6">
                    <div className="row">
                        <div className="col-7 col-lg-7 col-xl-4">
                            <a href="">
                                <img src="../img/logo-renca.png" style={{ maxHeight: '60px' }} alt="Ilustre Municipalidad de Renca" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-8 col-lg-6 justify-content-end">
                    <div className="row pb-2 text-end">
                        <div className="col-3">
                            <div className="row">
                                <div className="col text-end">
                                     {/* <button className="btn" onClick={aumentarTexto}>
                                        <IoResize size={24} />
                                    </button>  */}
                                </div>
                            </div>
                        </div>
                        <div className="col-1">
                            <div className="row">
                                <div className="col text-end" onClick={toggleDarkMode}>
                                    {darkMode ? (
                                        <IoSunnyOutline size={24} />
                                    ) : (
                                        <IoMoonOutline size={24} />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <form className="navbar-form" role="search" action="#" method="get">
                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="text" name="s" id="search" placeholder="¿Qué deseas aprender?" className="form-control" style={{ fontSize: '80%', borderRadius: '5px' }} />
                                        <button type="submit" className="btn btn-outline-secondary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </header>

            <nav id="nav1" className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Currículum Renca</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="/CursosDispo">CURSOS DISPONIBLES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/PreguntasFrecuentes">PREGUNTAS FRECUENTES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/ContactoPag">CONTACTO</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <a target="_blank" href="/LoginRegistro">
                                <button className="btn bi-hand-thumbs-up" type="button">INGRESAR</button>
                            </a>
                            <a target="_blank" href="/LoginRegistro">
                                <button className="btn btn-outline-success ml-4" type="button">REGISTRARSE</button>
                            </a>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
