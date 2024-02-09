// Datos de ejemplo de cursos con imágenes
const courses = [
    { 
        title: "Curso Básico PYTHON", 
        category: "Lenguajes-de-programación", 
        description: "Aprende los fundamentos del desarrollo web, incluyendo HTML, CSS y JavaScript.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaVozccpgrxbSn5UuIW5IEop_0Q6sr8deqaSWePdvjg&s" // Agrega la URL de la imagen para el curso de Python
    },
    {
        title: "Curso Básico Scratch", 
        category: "desarrollo-web", 
        description: "Aprende los fundamentos del desarrollo web, incluyendo HTML, CSS y JavaScript.",
        image: "https://edteam-media.s3.amazonaws.com/courses/original/a1a1984b-d7c7-4fdd-b176-6647819d3d2e.png" // Agrega la URL de la imagen para el curso de Python
    },
    { 
        title: "Curso Básico Arduino", 
        category: "desarrollo-web", 
        description: "Aprende los fundamentos del desarrollo web, incluyendo HTML, CSS y JavaScript.",
        image: "https://edteam-media.s3.amazonaws.com/courses/original/1bada4e8-4bab-4be8-8f2e-83e285515187.png" // Agrega la URL de la imagen para el curso de Python
    },
    { 
        title: "Curso Básico Excel", 
        category: "python", 
        description: "Aprende los fundamentos del desarrollo web, incluyendo HTML, CSS y JavaScript.",
        image: "https://edteam-media.s3.amazonaws.com/courses/original/506ead68-9257-44c7-8ff8-2d0c320b99dd.jpg" // Agrega la URL de la imagen para el curso de Python
    },
    { 
        title: "Curso Básico AWS", 
        category: "desarrollo-web", 
        description: "Aprende los fundamentos del desarrollo web, incluyendo HTML, CSS y JavaScript.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv_FeHat2EE3hkIvYfCpL9-IHyB9fluBCmxw&usqp=CAU" // Agrega la URL de la imagen para el curso de Python
    },
    { 
        title: "Curso Básico Java", 
        category: "Lenguajes-de-programación", 
        description: "Aprende los fundamentos del desarrollo web, incluyendo HTML, CSS y JavaScript.",
        image: "https://edteam-media.s3.amazonaws.com/courses/big/152be9d3-4704-4639-b399-203a76a286c5.jpg" // Agrega la URL de la imagen para el curso de Python
    },
    { 
        title: "Curso Inglés Básico", 
        category: "Idiomas", 
        description: "Aprende los fundamentos del desarrollo web, incluyendo HTML, CSS y JavaScript.",
        image: "https://www.acritica.com/image/policy:1.308771.1687463101:1687463101/image.jpg?f=default&w=1200" // Agrega la URL de la imagen para el curso de Python
    },
    
];

// Función para filtrar cursos por categoría y renderizar las tarjetas
function renderCourses(category) {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = ''; // Limpiar el contenido anterior

    courses.forEach(course => {
        // Si la categoría es 'all' o coincide con la categoría del curso, mostrar el curso
        if (category === 'all' || category === course.category) {
            const cardHtml = `
                <div class="col-md-4">
                    <div class="card course-card">
                        <img src="${course.image}" class="card-img-top" alt="${course.title}"> <!-- Agrega la imagen -->
                        <div class="card-body">
                            <h5 class="card-title">${course.title}</h5>
                            <p class="card-text">${course.description}</p>
                        </div>
                    </div>
                </div>
            `;
            courseList.innerHTML += cardHtml;
        }
    });
}

// Al cargar la página, renderizar los cursos con la categoría "Todos"
document.addEventListener('DOMContentLoaded', function () {
    renderCourses('all');
});

// Al cambiar la opción de filtrado, renderizar los cursos con la categoría seleccionada
document.getElementById('filter-category').addEventListener('change', function () {
    const selectedCategory = this.value;
    renderCourses(selectedCategory);
});
