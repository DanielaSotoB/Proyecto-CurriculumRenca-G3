import React, { useState, useEffect } from 'react';
import './CursosDisponibles.jsx';

const CursosDisponibles = () => {
    // Estado para almacenar la categoría seleccionada
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('all');

    // Estado para almacenar la lista de cursos
    const [cursos, setCursos] = useState([]);

    // Función para cargar los cursos desde una API (simulada)
    useEffect(() => {
        // Aquí se simula la carga de cursos desde una API
        // Reemplaza este código con la lógica de carga de datos de tu aplicación
        const cargarCursos = async () => {
            // Simulación de carga de datos desde una API
            const data = await fetch('URL_DE_TU_API_AQUI');
            const cursosData = await data.json();
            setCursos(cursosData);
        };

        cargarCursos();
    }, []); // Se ejecuta solo una vez al montar el componente

    // Función para filtrar los cursos según la categoría seleccionada
    const filtrarCursos = () => {
        if (categoriaSeleccionada === 'all') {
            return cursos;
        } else {
            return cursos.filter(curso => curso.categoria === categoriaSeleccionada);
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Cursos Disponibles</h1>
            <div className="row mb-4">
                <div className="col-md-4">
                    <select
                        id="filter-category"
                        className="form-control"
                        value={categoriaSeleccionada}
                        onChange={e => setCategoriaSeleccionada(e.target.value)}
                    >
                        <option value="all">Todos</option>
                        <option value="desarrollo-web">Desarrollo Web</option>
                        <option value="Lenguajes-de-programación">Lenguajes de programación</option>
                        <option value="Idiomas">Idiomas</option>
                        {/* Agrega más opciones de categoría según sea necesario */}
                    </select>
                </div>
            </div>
            <div id="course-list" className="row">
                {/* Mapear los cursos filtrados para mostrarlos */}
                {filtrarCursos().map(curso => (
                    <div key={curso.id} className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">{curso.nombre}</h5>
                                <p className="card-text">{curso.descripcion}</p>
                                <p className="card-text">Categoría: {curso.categoria}</p>
                                {/* Agrega más detalles del curso según sea necesario */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CursosDisponibles;

