import React from 'react';
import './Contacto.css';

const Contacto = () => {
  return (
    <div>
      {/* NAVS PRINCIPAL DE TODAS LAS PÁGINAS */}
      <header className="header--featured row mt-4 mb-1 mx-4 d-none d-md-flex">
        {/* ... (Código del encabezado) */}
      </header>

      {/* NAVBAR HIJO */}
      <nav id="nav1" className="navbar navbar-expand-lg">
        {/* ... (Código de la barra de navegación) */}
      </nav>

      {/* Formulario de contacto */}
      <form className="form2">
        <br />
        <h2>Contacto</h2>

        <div className="input-group2">
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" id="name" placeholder="Nombre" />

          <label htmlFor="phone">Teléfono</label>
          <input type="tel" name="phone" id="phone" placeholder="Teléfono" />

          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" name="email" id="email" placeholder="Correo Electrónico" />

          <label htmlFor="message">Mensaje</label>
          <textarea
            type="message"
            name="message"
            id="message"
            cols="30"
            rows="5"
            placeholder="Mensaje"
          ></textarea>

          <input className="btn2" type="submit" value="Enviar" />
        </div>
      </form>

      {/* Sección de colores */}
      <div className="container py-1">
        {/* ... (Código de la sección de colores) */}
      </div>

      {/* Pie de página */}
      <footer className="w-100  d-flex  align-items-center justify-content-center flex-wrap">
        {/* ... (Código del pie de página) */}
      </footer>

      <script src="contacto.js"></script>
    </div>
  );
};

export default Contacto;
