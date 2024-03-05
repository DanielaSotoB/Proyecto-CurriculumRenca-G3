import React, { useState, useEffect } from 'react';
import './modooscuro.css'; 

const Navbar = () => {
    // Estado para el modo oscuro
    const [modoOscuro, setModoOscuro] = useState(false);

    // Función para cambiar el estado del modo oscuro
    const toggleModoOscuro = () => {
        setModoOscuro(!modoOscuro);
    };

 // Estado para el tamaño del texto
 const [tamanioTexto, setTamanioTexto] = useState(16); 

    // Efecto para aplicar el modo oscuro al body cuando cambia el estado
    useEffect(() => {
        if (modoOscuro) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [modoOscuro]);

    // Función para aumentar el tamaño del texto
    const aumentarTexto = () => {
        setTamanioTexto(tamanioTexto + 2);
        document.documentElement.style.fontSize = `${tamanioTexto + 2}px`;
    };

    // Función para disminuir el tamaño del texto
    const disminuirTexto = () => {
        setTamanioTexto(tamanioTexto - 2);
        document.documentElement.style.fontSize = `${tamanioTexto - 2}px`;
    };
    return (
        <>
            <header className={`header--featured row mt-4 mb-1 mx-4 d-none d-md-flex ${modoOscuro ? 'dark-mode' : ''}`}>
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
                    <button id= "tamaño-texto" className="btn btn-aumentar me-2" onClick={aumentarTexto}>+A</button>
                    <button id= "tamaño-texto"  className="btn btn-disminuir" onClick={disminuirTexto}>-A</button>
                </div>
            </div>
        </div>
        <div className="col-1">
            <div className="row">
                <div className="col text-end" onClick={toggleModoOscuro}>
                    <svg id="darkIcon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-mask" viewBox="0 0 16 16">
                        <path d="M6.225 1.227A7.5 7.5 0 0 1 10.5 8a7.5 7.5 0 0 1-4.275 6.773 7 7 0 1 0 0-13.546M4.187.966a8 8 0 1 1 7.627 14.069A8 8 0 0 1 4.186.964z"/>
                    </svg> 
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

            <nav id="nav1" className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Currículum Renca</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active"  href="/CursosDispo">CURSOS DISPONIBLES</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link active"  href="/InformacionCursos"> INFO CURSOS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/MiCursito"> MI CURSO</a>
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link" href="/PreguntasFrecuentes">PREGUNTAS FRECUENTES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/MiCursito">CONTACTO</a>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                        </svg>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
