import React, { useState } from 'react';

const NotificacionEstudiante = ({ notificacion }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Notificación predeterminada de bienvenida
  const notificacionBienvenida = {
    asunto: 'Bienvenidos al Portal de Cursos',
    descripcion: 'Explora y aprende con nuestra amplia variedad de cursos disponibles.'
  };

  // Utiliza la notificación de bienvenida si no hay otra notificación pasada como prop
  const notificacionActual = notificacion || notificacionBienvenida;

  // Estilos CSS en línea
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
    },
    header: {
      fontSize: '24px',
      borderBottom: '1px solid #ccc',
      paddingBottom: '10px',
      marginBottom: '20px',
    },
    notification: {
      fontSize: '16px',
      backgroundColor: '#f9f9f9',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    notificationHover: {
      backgroundColor: '#e9e9e9',
    }
  };

  const handleNotificationClick = () => {
    setIsOpen(!isOpen);
  };

  // Determina el estilo de la notificación según si está abierta o no
  const notificationStyle = isOpen ? {...styles.notification, ...styles.notificationHover} : styles.notification;

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Mis Notificaciones</h2>
      <div style={notificationStyle} onClick={handleNotificationClick}>
        <strong>Asunto:</strong> {notificacionActual.asunto}
        {isOpen && (
          <div>
            <strong>Descripción:</strong> {notificacionActual.descripcion}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificacionEstudiante;


