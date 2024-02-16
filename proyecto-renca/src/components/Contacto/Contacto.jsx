import './Contacto.css'

const Contacto = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
  };

  return (
    <form className="form2" onSubmit={handleSubmit}>
      <h2>Contacto</h2>

      <div className="input-group2">
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" id="name" placeholder="Nombre" required />

        <label htmlFor="phone">Teléfono</label>
        <input type="tel" name="phone" id="phone" placeholder="Teléfono" />

        <label htmlFor="email">Correo Electrónico</label>
        <input type="email" name="email" id="email" placeholder="Correo Electrónico" required />

        <label htmlFor="message">Mensaje</label>
        <textarea name="message" id="message" cols="30" rows="5" placeholder="Mensaje" required></textarea>

        <input className="btn2" type="submit" value="Enviar" />
      </div>
    </form>
  );
};

export default Contacto;
