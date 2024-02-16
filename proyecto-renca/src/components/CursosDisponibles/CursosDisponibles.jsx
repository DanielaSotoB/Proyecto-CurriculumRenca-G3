import React, { useEffect, useState } from 'react';

const courses = [
    { 
        title: "Curso Básico PYTHON", 
        category: "Lenguajes-de-programación", 
        description: "Aprende los fundamentos del desarrollo web, incluyendo HTML, CSS y JavaScript.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaVozccpgrxbSn5UuIW5IEop_0Q6sr8deqaSWePdvjg&s"
    },
    {
        title: "Curso Básico Scratch", 
        category: "desarrollo-web", 
        description: "Aprende los fundamentos del desarrollo web, incluyendo HTML, CSS y JavaScript.",
        image: "https://edteam-media.s3.amazonaws.com/courses/original/a1a1984b-d7c7-4fdd-b176-6647819d3d2e.png"
    },
    { 
        title: "Curso Básico Arduino", 
        category: "desarrollo-web", 
        description: "Aprende los fundamentos del desarrollo web, incluyendo HTML, CSS y JavaScript.",
        image: "https://edteam-media.s3.amazonaws.com/courses/original/1bada4e8-4bab-4be8-8f2e-83e285515187.png"
    },
    { 
        title: "Curso Básico Excel", 
        category: "python", 
        description: "Aprende los fundamentos del desarrollo web, incluyendo HTML, CSS y JavaScript.",
        image: "https://edteam-media.s3.amazonaws.com/courses/original/506ead68-9257-44c7-8ff8-2d0c320b99dd.jpg"
    },
    { 
        title: "Curso Básico AWS", 
        category: "desarrollo-web", 
        description: "Aprende los fundamentos del desarrollo web, incluyendo HTML, CSS y JavaScript.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv_FeHat2EE3hkIvYfCpL9-IHyB9fluBCmxw&usqp=CAU"
    },
    { 
        title: "Curso Básico Java", 
        category: "Lenguajes-de-programación", 
        description: "Aprende los fundamentos del desarrollo web, incluyendo HTML, CSS y JavaScript.",
        image: "https://edteam-media.s3.amazonaws.com/courses/big/152be9d3-4704-4639-b399-203a76a286c5.jpg"
    },
    { 
        title: "Curso Inglés Básico", 
        category: "Idiomas", 
        description: "Aprende los fundamentos del desarrollo web, incluyendo HTML, CSS y JavaScript.",
        image: "https://www.acritica.com/image/policy:1.308771.1687463101:1687463101/image.jpg?f=default&w=1200"
    },
];

function CursosDisponibles () {
    const [category, setCategory] = useState('all');
    const [filteredCourses, setFilteredCourses] = useState([]);

    useEffect(() => {
        if (category === 'all') {
            setFilteredCourses(courses);
        } else {
            setFilteredCourses(courses.filter(course => course.category === category));
        }
    }, [category]);

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Cursos Disponibles</h1>
            <div className="row mb-4">
                <div className="col-md-4">
                    <select id="filter-category" className="form-control" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="all">Todos</option>
                        <option value="desarrollo-web">Desarrollo Web</option>
                        <option value="Lenguajes-de-programación">Lenguajes de programación</option>
                        <option value="Idiomas">Idiomas</option>
                        {/* Agrega más opciones de categoría según sea necesario */}
                    </select>
                </div>
            </div>
            <div id="course-list" className="row">
                {filteredCourses.map((course, index) => (
                    <div key={index} className="col-md-4">
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
        </div>
    );
}

export default CursosDisponibles;
