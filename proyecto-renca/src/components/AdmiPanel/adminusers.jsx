import React from 'react';
import './adminuser.css';

const PaginaUsuarios = ({ usuarios }) => {
    return (
        <div className="contenedor">
            <div className="encabezado">
                <input type="text" placeholder="Buscar usuario..." />
                <button>Agregar Nuevo</button>
            </div>
            <table className="tabla">
                <thead>
                    <tr>
                        <td>Nombre</td>
                        <td>Correo Electrónico</td>
                        <td>Creado En</td>
                        <td>Rol</td>
                        <td>Estado</td>
                        <td>Acción</td>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>
                                <div className="usuario">
                                    <img src={usuario.img || '/noavatar.png'} alt="" width={40} height={40} />
                                    {usuario.username}
                                </div>
                            </td>
                            <td>{usuario.email}</td>
                            <td>{usuario.createdAt?.toString().slice(4, 16)}</td>
                            <td>{usuario.isAdmin ? 'Admin' : 'Cliente'}</td>
                            <td>{usuario.isActive ? 'activo' : 'inactivo'}</td>
                            <td>
                                <div className="botones">
                                    <button>Ver</button>
                                    <button>Eliminar</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="paginacion">Componente de Paginación</div>
        </div>
    );
};

export default PaginaUsuarios;
