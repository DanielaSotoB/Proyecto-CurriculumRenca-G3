// Función para redirigir a la página correspondiente
function redirectToPage(page) {
    window.location.href = page;
  }
  
  // Event listeners para los enlaces y botones
  document.querySelector('.sidebar-heading a').addEventListener('click', function () {
    redirectToPage('index.html');
  });
  
  document.querySelector('.list-group-item:nth-child(2) a').addEventListener('click', function () {
    redirectToPage('usuarios.html');
  });
  
  document.querySelector('.list-group-item:nth-child(3) a').addEventListener('click', function () {
    redirectToPage('cursos.html');
  });
  
  document.querySelector('.list-group-item:nth-child(4) a').addEventListener('click', function () {
    redirectToPage('estadisticas.html');
  });
  
  document.querySelector('.card:nth-child(1) a').addEventListener('click', function () {
    redirectToPage('usuarios.html');
  });
  
  document.querySelector('.card:nth-child(2) a').addEventListener('click', function () {
    redirectToPage('cursos.html');
  });
  
  document.querySelector('.card:nth-child(3) a').addEventListener('click', function () {
    redirectToPage('estadisticas.html');
  });
  