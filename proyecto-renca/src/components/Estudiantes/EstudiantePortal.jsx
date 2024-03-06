import React from 'react';
import './EstudiantePortal.css'; // Asumiendo que tienes un archivo CSS para estilos

function EstudiantePortal() {
  return (
    <div className="student-portal">
      <header className="portal-header">
        <img src="logo.png" alt="Logo de la escuela" className="school-logo" />
        <h1>Bienvenido al Portal del Estudiante</h1>
      </header>
      <main className="portal-content">
        <section className="student-info">
          <h2>Información del Estudiante</h2>
          <p>Nombre: Juan Pérez</p>
          <p>Grado: 10°</p>
          <p>Especialización: Ciencias</p>
        </section>
        <section className="student-grades">
          <h2>Calificaciones</h2>
          <ul>
            <li>Matemáticas: 90</li>
            <li>Biología: 85</li>
            <li>Física: 88</li>
          </ul>
        </section>
      </main>
      <footer className="portal-footer">
        <p>&copy; 2024 Escuela Secundaria ABC. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default EstudiantePortal;
