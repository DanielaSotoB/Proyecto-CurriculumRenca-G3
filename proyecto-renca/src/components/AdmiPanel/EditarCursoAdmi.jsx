import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditarCursoAdmi = () => {
    const [cursos, setCursos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchCursos();
    }, []);

    const fetchCursos = async () => {
        try {
            const response = await axios.get('/api/cursos'); // Endpoint para obtener los cursos
            setCursos(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching cursos:', error);
            setIsLoading(false);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/cursos/${id}`); // Endpoint para eliminar un curso
            fetchCursos(); // Refrescar la lista de cursos después de eliminar
        } catch (error) {
            console.error('Error deleting curso:', error);
        }
    };

    return (
        <div>
            <h1>Lista de Cursos</h1>
            {isLoading ? (
                <p>Cargando cursos...</p>
            ) : (
                <ul>
                    {cursos.map(curso => (
                        <li key={curso._id}>
                            <h2>{curso.title}</h2>
                            <p>{curso.category}</p>
                            <p>{curso.description}</p>
                            <img src={curso.image} alt={curso.title} />
                            <button onClick={() => handleDelete(curso._id)}>Eliminar</button>
                            {/* Agregar botón para editar si se desea */}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default EditarCursoAdmi;
