import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function UserList() {
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsuarios() {
      try {
        const response = await axios.get('http://localhost:3001/api/usuarios/listar-usuarios/');
        setUsuarios(response.data);
      } catch (error) {
        console.error('Error fetching usuarios:', error);
        setError('Error al obtener los usuarios. Por favor, intenta de nuevo más tarde.');
      }
    }

    fetchUsuarios();
  }, []);

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3001}/api/usuarios/borrar-usuario/${id}`);
      // Filtrar la lista de usuarios para eliminar el usuario eliminado
      setUsuarios(usuarios.filter(usuario => usuario._id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
      setError('Error al eliminar el usuario. Por favor, intenta de nuevo más tarde.');
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {error && <p className="alert alert-danger">{error}</p>}
          <h1 className="mb-4">Lista de Usuarios</h1>
          <ul className="list-group">
            {usuarios.map(usuario => (
              <li key={usuario._id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>Nombre:</strong> {usuario.nombre}
                </div>
                <button className="btn btn-danger" onClick={() => handleDeleteUser(usuario._id)}>Eliminar</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserList;
