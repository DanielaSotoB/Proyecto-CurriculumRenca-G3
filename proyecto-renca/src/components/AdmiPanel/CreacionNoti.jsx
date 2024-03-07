import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './CreacionNoti.css';

const CreacionNoti = ({ enviarNotificacion }) => {
  const [asunto, setAsunto] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    enviarNotificacion({ asunto, descripcion });
    setAsunto('');
    setDescripcion('');
    Swal.fire({
      title: '¡Éxito!',
      text: 'Notificación enviada exitosamente a todos los estudiantes',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#3075ff',
    });
  };

  return (
    <div className="creacion-noti">
      <div className="creacion-noti-header">
        <h2>Mensaje nuevo</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Para: <Estudiantes>" disabled />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="asunto"
            value={asunto}
            className="form-control"
            placeholder="Asunto"
            onChange={(e) => setAsunto(e.target.value)}
          />
        </div>
        <div className="form-group">
          <textarea
            id="descripcion"
            value={descripcion}
            className="form-control"
            rows="4"
            placeholder="Escribe tu mensaje aquí..."
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-enviar">Enviar</button>
      </form>
    </div>
  );
};

export default CreacionNoti;

