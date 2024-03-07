import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CursosDisponibles = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [courses, setCourses] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/cursos/cursos'); // Cambia la URL según la ubicación de tu backend
                setCourses(response.data);
            } catch (error) {
                console.error('Error al obtener cursos:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (selectedCategory === 'all') {
            setFilteredCourses(courses);
        } else {
            const filtered = courses.filter(course => course.category === selectedCategory);
            setFilteredCourses(filtered);
        }
    }, [selectedCategory, courses]);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Cursos Disponibles</h1>
            <div className="row mb-4">
                <div className="col-md-4">
                    <select id="filter-category" className="form-control" value={selectedCategory} onChange={handleCategoryChange}>
                        <option value="all">Todos</option>
                        <option value="Desarrollo">Desarrollo Web</option>
                        <option value="Lenguajes-de-programación">Lenguajes de programación</option>
                        <option value="Idiomas">Idiomas</option>
                    </select>
                </div>
            </div>
            <div id="course-list" className="row">
                {filteredCourses.map(course => (
                    <div className="col-md-4" key={course._id}>
                        <div className="card course-card">
                            <img src={course.image} className="card-img-top" alt={course.title} />
                            <div className="card-body">
                                <h5 className="card-title">{course.title}</h5>
                                <p className="card-text">{course.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
              {/* TARJETA 5 */}
              <div className="col-tarjeta">
                    <div className="card">
                        <img className="card-img-top" src="https://edteam-media.s3.amazonaws.com/courses/original/506ead68-9257-44c7-8ff8-2d0c320b99dd.jpg" alt="Curso Básico Excel" />
                        <div className="card-body">
                            <h1 className="h5 card-title">Curso Básico Excel</h1>
                            <p className="card-text">Duración: 7 horas</p>
                            <a href="/CursosDispo" className="btn btn-primary">Ir al curso</a>
                        </div>
                    </div>
                </div>
                
                           {/* TARJETA 4 */}
                           <div className="col-tarjeta">
                    <div className="card">
                        <img className="card-img-top" src="https://edteam-media.s3.amazonaws.com/courses/big/152be9d3-4704-4639-b399-203a76a286c5.jpg" alt="Curso Básico Java" />
                        <div className="card-body">
                            <h1 className="h5 card-title">Curso Básico Java</h1>
                            <p className="card-text">Duración: 7 horas</p>
                            <a href="/CursosDispo" className="btn btn-primary">Ir al curso</a>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default CursosDisponibles;
