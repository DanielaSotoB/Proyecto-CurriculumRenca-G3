// Datos de ejemplo de cursos con imágenes
const courses = [
    { 
        title: "Curso Básico PYTHON", 
        category: "desarrollo-web", 
        description: "Aprende los fundamentos del desarrollo web, incluyendo HTML, CSS y JavaScript.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaVozccpgrxbSn5UuIW5IEop_0Q6sr8deqaSWePdvjg&s" // Agrega la URL de la imagen para el curso de Python
    },
    { 
        title: "Curso Básico Scratch", 
        category: "python", 
        description: "Introducción al lenguaje de programación Python desde cero, sin conocimientos previos necesarios.",
        image: "https://edteam-media.s3.amazonaws.com/courses/original/a1a1984b-d7c7-4fdd-b176-6647819d3d2e.png" // Agrega la URL de la imagen para el curso de Scratch
    },
    { 
        title: "Curso Básico PYTHON", 
        category: "desarrollo-web", 
        description: "Aprende los fundamentos del desarrollo web, incluyendo HTML, CSS y JavaScript.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaVozccpgrxbSn5UuIW5IEop_0Q6sr8deqaSWePdvjg&s" // Agrega la URL de la imagen para el curso de Python
    },
    { 
        title: "Curso Básico PYTHON", 
        category: "desarrollo-web", 
        description: "Aprende los fundamentos del desarrollo web, incluyendo HTML, CSS y JavaScript.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaVozccpgrxbSn5UuIW5IEop_0Q6sr8deqaSWePdvjg&s" // Agrega la URL de la imagen para el curso de Python
    },
    { 
        title: "Curso Básico PYTHON", 
        category: "desarrollo-web", 
        description: "Aprende los fundamentos del desarrollo web, incluyendo HTML, CSS y JavaScript.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaVozccpgrxbSn5UuIW5IEop_0Q6sr8deqaSWePdvjg&s" // Agrega la URL de la imagen para el curso de Python
    },
    { 
        title: "Curso Básico PYTHON", 
        category: "desarrollo-web", 
        description: "Aprende los fundamentos del desarrollo web, incluyendo HTML, CSS y JavaScript.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaVozccpgrxbSn5UuIW5IEop_0Q6sr8deqaSWePdvjg&s" // Agrega la URL de la imagen para el curso de Python
    },
    { 
        title: "Curso Básico PYTHON", 
        category: "desarrollo-web", 
        description: "Aprende los fundamentos del desarrollo web, incluyendo HTML, CSS y JavaScript.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaVozccpgrxbSn5UuIW5IEop_0Q6sr8deqaSWePdvjg&s" // Agrega la URL de la imagen para el curso de Python
    },
    { 
        title: "Curso Básico PYTHON", 
        category: "desarrollo-web", 
        description: "Aprende los fundamentos del desarrollo web, incluyendo HTML, CSS y JavaScript.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaVozccpgrxbSn5UuIW5IEop_0Q6sr8deqaSWePdvjg&s" // Agrega la URL de la imagen para el curso de Python
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
