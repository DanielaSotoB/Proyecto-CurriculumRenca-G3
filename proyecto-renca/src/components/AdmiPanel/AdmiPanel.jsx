import React, { useEffect, useState } from 'react';
import './adminpanel.css';
import Chart from 'chart.js/auto';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AdminPanel = () => {
  const [cursos, setCursos] = useState([]); // Variable de estado para cursos
  const [userStats, setUserStats] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  let cursosChart = null;

  useEffect(() => {
    const fetchCursosData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/cursos/cursos');
        const data = await response.json();
        setCursos(data);
      } catch (error) {
        console.error('Error al obtener cursos:', error);
      }
    };

    fetchCursosData();
  }, []);

  useEffect(() => {
    const fetchUserStatsData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/userStats');
        const data = await response.json();
        setUserStats(data);
      } catch (error) {
        console.error('Error al obtener estadísticas de usuario:', error);
      }
    };

    fetchUserStatsData();
  }, []);

  useEffect(() => {
    const cursosCtx = document.getElementById('cursosChart');

    if (cursosCtx && cursos.length > 0) {
      if (cursosChart) {
        cursosChart.destroy();
      }

      cursosChart = new Chart(cursosCtx, {
        type: 'bar',
        data: {
          labels: cursos.map(curso => curso.nombre),
          datasets: [{
            label: 'Cantidad de Estudiantes',
            data: cursos.map(curso => curso.estudiantes),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }

    return () => {
      if (cursosChart) {
        cursosChart.destroy();
      }
    };
  }, [cursos]);

  const handleDateChange = date => {
    setSelectedDate(date);
    // Handle date change logic here if needed
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9 content">
          <div className="container mt-4">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h4 className="mb-0">Panel de Administrador</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title">Usuarios</h5>
                        <p className="card-text">Gestiona los usuarios del sistema.</p>
                        {/* Add your redirection logic or function here */}
                        <button className="btn btn-primary" onClick={() => redirectToPage('/usuarios')}>Ir a Usuarios</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title">Cursos</h5>
                        <p className="card-text">Administra los cursos disponibles.</p>
                        {/* Add your redirection logic or function here */}
                        <button className="btn btn-primary" onClick={() => redirectToPage('/AdmiPanelCurso')}>Ir a Cursos</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 sidebar bg-light">
          <div className="sidebar-heading">
            Estadísticas
          </div>
          <div className="card mb-3">
            <div className="card-body">
              <canvas id="cursosChart"></canvas>
            </div>
          </div>
          <div className="calendar-container">
            <h5>Calendario</h5>
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
