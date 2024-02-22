import React from 'react';
import './adminpanel.css';

const AdminPanel = () => {

  const redirectToPage = (page) => {
    window.location.href = page;
  };

  return (
    <body id="Navbar-administrador">
    <>
      <div className="d-flex">
        {/* Sidebar */}
        <div className="sidebar bg-dark text-light">
          <div className="sidebar-heading">
            Panel de Administrador
          </div>
          <ul className="list-group">
            <li className="list-group-item">
              <a href="/adminpanel">
                <i className="fas fa-home"></i> Inicio
              </a>
            </li>
            <li className="list-group-item">
              <a href="/usuarios">
                <i className="fas fa-users"></i> Usuarios
              </a>
            </li>
            <li className="list-group-item">
              <a href="/cursos">
                <i className="fas fa-book"></i> Cursos
              </a>
            </li>
            <li className="list-group-item">
              <a href="/estadisticas">
                <i className="fas fa-chart-bar"></i> Estadísticas
              </a>
            </li>
          </ul>
        </div>

        {/* Contenido de la página */}
        <div id="page-content-wrapper" className="content">
          <div className="container mt-4">
            <div className="card">
              <div id="nav1" className="card-header text-white">
                <h4 className="mb-0">Panel de Administrador - Cursos</h4>
              </div>
              <div className="card-body">
                {/* Contenido del panel administrativo */}
                <div className="row">
                  <div className="col-md-4">
                    <div className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title">Usuarios</h5>
                        <p className="card-text">Gestiona los usuarios del sistema.</p>
                        <button className="btn btn-primary" onClick={() => redirectToPage('/usuarios')}>Ir a Usuarios</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title">Cursos</h5>
                        <p className="card-text">Administra los cursos disponibles.</p>
                        <button className="btn btn-primary" onClick={() => redirectToPage('/cursos')}>Ir a Cursos</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title">Estadísticas</h5>
                        <p className="card-text">Visualiza las estadísticas de los cursos.</p>
                        <button className="btn btn-primary" onClick={() => redirectToPage('/estadisticas')}>Ir a Estadísticas</button>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-4" />
                <h5 className="mb-3">Últimos Cursos Agregados</h5>
                <div className="list-group">
                  <a href="#" className="list-group-item list-group-item-action">
                    Curso 1
                    <span className="badge badge-success ml-2">Disponible</span>
                  </a>
                  <a href="#" className="list-group-item list-group-item-action">
                    Curso 2
                    <span className="badge badge-warning ml-2">En Revisión</span>
                  </a>
                  <a href="#" className="list-group-item list-group-item-action">
                    Curso 3
                    <span className="badge badge-danger ml-2">No Aprobado</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    </body>
  );
}

export default AdminPanel;
