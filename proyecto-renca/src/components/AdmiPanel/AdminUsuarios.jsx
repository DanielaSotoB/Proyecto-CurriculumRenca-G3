import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './adminuser.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminUsuarios = () => {
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

  const handleDeleteUser = async (id, nombre) => {
    const result = await Swal.fire({
      title: `¿Estás seguro de que deseas eliminar al usuario ${nombre}?`,
      text: "¡Esta acción no se puede deshacer!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:3001/api/usuarios/borrar-usuario/${id}`);
        setUsuarios(prevUsers => prevUsers.filter(usuario => usuario._id !== id));
        Swal.fire(
          'Eliminado',
          `El usuario ${nombre} ha sido eliminado.`,
          'success'
        );
      } catch (error) {
        console.error('Error deleting user:', error);
        setError(`Error al eliminar el usuario con ID ${id}. Por favor, intenta de nuevo más tarde.`);
      }
    }
  };

  return (
    <div className="Desarrollo">
      <div className="encabezado">
        {/* <input type="text" placeholder="Buscar usuario..." /> */}
      </div>
      {error && <p className="alert alert-danger">{error}</p>}
      <h1 className="mb-4">Lista de Estudiantes</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo Electrónico</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario._id}>
              <td>
                <div className="usuario">
                  {usuario.nombre}
                </div>
              </td>
              <td>{usuario.correo}</td>
              <td>{usuario.isAdmin ? 'Admin' : 'Estudiante'}</td>
              <td>{usuario.isActive ? 'Activo' : 'Inactivo'}</td>
              <td>
                <div className="botones">
                  <button className="btn btn-danger" onClick={() => handleDeleteUser(usuario._id, usuario.nombre)}>Eliminar</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsuarios;
