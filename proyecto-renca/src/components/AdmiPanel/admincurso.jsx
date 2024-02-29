import React, { useState } from 'react';
import axios from 'axios';

const AdminCurso = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        image: '',
    });
    const [alert, setAlert] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // Estado para indicar carga

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.title && formData.description && formData.category && formData.image) {
            setIsLoading(true); // Establecer isLoading a true para indicar carga
            try {
                const response = await axios.post('http://localhost:3001/api/cursos/cursos', formData);
                console.log('Curso agregado con éxito:', response.data);
                setAlert({ type: 'success', message: 'El curso fue subido con éxito.' });
                setFormData({
                    title: '',
                    description: '',
                    category: '',
                    image: '',
                });
            } catch (error) {
                console.error('Error al agregar curso:', error);
                setAlert({ type: 'danger', message: 'Hubo un error al agregar el curso. Por favor, inténtalo de nuevo.' });
            } finally {
                setIsLoading(false); // Establecer isLoading a false después de la carga
            }
        } else {
            setAlert({ type: 'danger', message: 'Por favor, completa todos los campos del formulario.' });
        }
    };

    const handleCancel = () => {
        setAlert({ type: 'warning', message: 'La acción fue cancelada. El curso no fue subido.' });
    };

    return (
        <div className="container mt-5">
            {isLoading && <div className="text-center">Cargando...</div>} {/* Indicador de carga */}
            {alert && (
                <div className={`alert alert-${alert.type}`} role="alert">
                    {alert.message}
                </div>
            )}
            <h1 className="text-center mb-4">Agregar Nuevo Curso</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Título del Curso</label>
                    <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Descripción</label>
                    <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Categoría</label>
                    <input type="text" className="form-control" id="category" name="category" value={formData.category} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">URL de la Imagen</label>
                    <input type="text" className="form-control" id="image" name="image" value={formData.image} onChange={handleChange} required />
                </div>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#confirmModal">Agregar Curso</button>
                <div className="modal fade" id="confirmModal" tabIndex="-1" aria-labelledby="confirmModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="confirmModalLabel">Confirmación</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                ¿Estás seguro de que quieres subir este curso?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCancel}>Cancelar</button>
                                <button type="submit" className="btn btn-primary">Sí, Subir Curso</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AdminCurso;
