import React, { useState } from 'react';
import './NavbarUser.css'; // Importa el archivo CSS


function NavbarUsuario() {
  const [expanded, setExpanded] = useState(false); // Estado para el menú expandido

  // Función para manejar el clic en el botón
  const toggleSidebar = () => {
    setExpanded(!expanded); // Cambia el estado entre true y false
  };

  return (
    <div className={`wrapper ${expanded ? 'expand' : ''}`}>
      <aside id="sidebar">
        <div className="d-flex">
          <button className="toggle-btn" type="button" onClick={toggleSidebar}>
            <img className="imgRenca" src="logo-renca.png" alt="" width="45px" />
          </button>
          <div className="sidebar-logo">
            <a href="#">Ilustre municipalidad de Renca</a>
          </div>
        </div>
        <ul className="sidebar-nav">
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <i className="lni lni-user"></i>
              <span>Perfil</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <i className="lni lni-agenda"></i>
              <span>Certificaciones</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
              data-bs-target="#auth" aria-expanded="false" aria-controls="auth">
              <i className="lni lni-protection"></i>
              <span>Cursos</span>
            </a>
            <ul id="auth" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">Completados</a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">En Curso</a>
              </li>
            </ul>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <i className="lni lni-popup"></i>
              <span>Notificaciones</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <i className="lni lni-cog"></i>
              <span>Configuración</span>
            </a>
          </li>
        </ul>
        <div className="sidebar-footer">
          <a href="#" className="sidebar-link">
            <i className="lni lni-exit"></i>
            <span>Cerrar sesión</span>
          </a>
        </div>
      </aside>
      <div className="main p-3">
        <div className="text-center">
          <h1>
            Perfil Estudiante
          </h1>
        </div>
      </div>
    </div>
  );
}

export default NavbarUsuario;