import React from 'react';
import './admincurso.css'; // Importar estilos CSS

const AdminCurso = () => {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div id="nav3" className="container-fluid">
                    <h2> Agregar Curso </h2>
                </div>
            </nav>

            <div id="contenedor">
                <div className="div-1">
                    <h4>Informacion Del Curso</h4>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Nombre de Curso</span>
                        <input type="text" className="form-control" placeholder="" aria-label="CourseName" aria-describedby="basic-addon1" required />
                    </div>

                    <div className="mb-3">
                        <select className="form-select" id="validationTooltip04" required>
                            <option selected disabled value="">Categoria</option>
                            <option>Programacion</option>
                            <option>Idioma</option>
                            <option>Oficce</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon3">Creador del Curso</span>
                            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" required />
                        </div>
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text">Capacidad</span>
                        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" required />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text">Codigo del Curso</span>
                        <input type="text" className="form-control" placeholder="" aria-label="CodigoCurso" required />
                    </div>

                    <div className="mb-3">
                        <textarea className="form-control" id="validationTextarea" placeholder="Escribe una descripcion." required></textarea>
                        <div className="invalid-feedback">Por favor ingresa una descripcion.</div>
                    </div>
                </div>

                <div className="div-2">
                    <h4>Cargar Archivos del Curso</h4>
                    <div className="mb-3">
                        <input type="file" className="form-control" aria-label="file example" required />
                        <div className="invalid-feedback">Ingresar Portada</div>
                    </div>
                    <div className="mb-3">
                        <input type="file" className="form-control" aria-label="file example" required />
                        <div className="invalid-feedback">Ingresar Contenido Curso</div>
                    </div>
                    <div className="mb-3">
                        <input type="file" className="form-control" aria-label="file example" required />
                        <div className="invalid-feedback">Ingresar Contenido Curso</div>
                    </div>
                    <div className="mb-3">
                        <input type="file" className="form-control" aria-label="file example" required />
                        <div className="invalid-feedback">Ingresar Contenido Curso</div>
                    </div>
                    <div className="mb-3">
                        <input type="file" className="form-control" aria-label="file example" required />
                        <div className="invalid-feedback">Ingresar Contenido Curso</div>
                    </div>
                    <div className="col-12" id="boton">
                        <button className="btn btn-primary" type="submit">Guardar</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminCurso;
