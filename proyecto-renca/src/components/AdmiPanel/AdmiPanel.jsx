import React, { useState } from 'react';
import './adminpanel.css';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBookOpen, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const AdminPanel = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const redirectToPage = (url) => {
    window.open(url, '_blank');
  };

  // Estilo para el degradado del encabezado
  const headerStyle = {
    background: 'linear-gradient(to right, #Ff571e, #CEFF24, #0ab5fd)',
    color: 'white',
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 sidebar bg-light">
          <div className="calendar-container">
            <h5>Calendario</h5>
            <Calendar onChange={handleDateChange} value={selectedDate} />
          </div>
        </div>
        <div className="col-md-9 content">
          <div className="container mt-4">
            <div className="card">
              <div className="card-header" style={headerStyle}>
                <h4 className="mb-0">Panel de Administrador</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title">
                          <FontAwesomeIcon icon={faUsers} /> Usuarios
                        </h5>
                        <p className="card-text">Gestiona los usuarios del sistema.</p>
                        <a target="_blank" href="/AdmiPanelUsuarios">
                          <button className="btn btn-primary" type="button">Ir a usuarios</button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title">
                          <FontAwesomeIcon icon={faBookOpen} /> Cursos
                        </h5>
                        <p className="card-text">Administra los cursos disponibles.</p>
                        <a target="_blank" href="/AdmiPanelCursos">
                          <button className="btn btn-primary" type="button">Ir a cursos</button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title">
                          <FontAwesomeIcon icon={faPlusCircle} /> Crear Cursos
                        </h5>
                        <p className="card-text">Editar los cursos disponibles.</p>
                        <button className="btn btn-primary" onClick={() => redirectToPage('/AdmiPanelCurso')}>Ir a Cursos</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
