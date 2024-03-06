import React from 'react';
import './EstudiantePortal.css';

const Portada = ({ imageUrl }) => {
  return (
    <div className="portada" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="portada-texto">
        <h2>Bienvenido al Portal del Estudiante</h2>
      </div>
    </div>
  );
};

const EstudiantePortal = () => {
  return (
    <div className="estudiante-portal">
      <Portada imageUrl="https://renca.cl/wp-content/uploads/2023/07/cerro-landing-nueva.jpeg" />
    </div>
  );
};

export default EstudiantePortal;
