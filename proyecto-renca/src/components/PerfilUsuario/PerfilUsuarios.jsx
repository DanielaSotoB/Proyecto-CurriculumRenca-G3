import './perfilUsuario.css'; 

const PerfilUsuarios = () => {
  return (
    <>
    

      {/* Form for personal data */}
      <form className="containerformpadre">
        <section className="avatars">
          <img src="images/1705586748936.jpg" alt="" />
          <option> </option>
        </section>

        <div className="hijonombre">
          <label htmlFor="inputName" className="form-label">
            Nombres y Apellidos
          </label>
          <input type="name" className="form-control" id="inputEmail4" />
        </div>

        <div className="hijosexo">
          <label htmlFor="inputCity" className="form-label">
            Sexo
          </label>
          <select id="inputSex" className="form-select">
            <option selected></option>
            <option>Femenino</option>
            <option>Masculino</option>
            <option>Otro</option>
            <option>No Identificado</option>
          </select>
        </div>

        <div className="hijoedad">
          <label htmlFor="inputPassword4" className="form-label">
            Edad
          </label>
          <input type="age" className="form-control" id="inputAge" />
        </div>

        <div className="hijoemail">
          <label htmlFor="inputPassword4" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="inputPassword4" />
        </div>

        <div className="hijodireccion">
          <label htmlFor="inputAddress" className="form-label">
            Direccion
          </label>
          <input type="text" className="form-control" id="inputAddress" placeholder="" />
        </div>

        <div className="hijociudad">
          <label htmlFor="inputAddress2" className="form-label">
            Ciudad
          </label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="" />
        </div>

        <p className="hijoregion">
          <label htmlFor="inputState" className="form-label">
            Region
          </label>
          <select id="inputState" className="form-select">
            <option selected>Region...</option>
            <option>Región de Arica y Parinacota.</option>
            <option>Región de Tarapacá</option>
            <option>Región de Antofagasta.</option>
            <option>Región de Atacama</option>
            <option>Región de Coquimbo.</option>
            <option>Región de Valparaíso.</option>
            <option>Región Metropolitana.</option>
            <option>Región de O'Higgins.</option>
          </select>
        </p>

        <div className="hijotelefono">
          <label htmlFor="inputCity" className="form-label">
            Telefono
          </label>
          <input type="text" className="form-control" id="inputCity" />
        </div>

        <div className="casillacheck">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label" htmlFor="gridCheck">
              Todos mis datos estan correctos
            </label>
          </div>
        </div>

        <div className="botonconfirmar">
          <button type="submit" className="btn btn-primary">
            Confirmar
          </button>
        </div>
      </form>
    </>
  );
};

export default PerfilUsuarios;