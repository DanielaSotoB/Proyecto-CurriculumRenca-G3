import './modooscuro.css'

{/* Navbar principal para todas las paginas */}
const Navbar = () => {
  return (
    <>
      <header className="header--featured row mt-4 mb-1 mx-4 d-none d-md-flex">
        <div className="col-4 col-lg-6">
          <div className="row">
            <div className="col-7 col-lg-7 col-xl-4">
              <a href="https://renca.cl/">
                <img src="../img/logo-renca.png" style={{ maxHeight: '60px' }} alt="Ilustre Municipalidad de Renca" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-8 col-lg-6 justify-content-end">
          <div className="row pb-2 text-end">
            <div className="col-6">
              <div className="row">
                <div className="col text-end">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-mask" viewBox="0 0 16 16">
                    <path d="M6.225 1.227A7.5 7.5 0 0 1 10.5 8a7.5 7.5 0 0 1-4.275 6.773 7 7 0 1 0 0-13.546M4.187.966a8 8 0 1 1 7.627 14.069A8 8 0 0 1 4.186.964z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-globe2" viewBox="0 0 16 16">
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855q-.215.403-.395.872c.705.157 1.472.257 2.282.287zM4.249 3.539q.214-.577.481-1.078a7 7 0 0 1 .597-.933A7 7 0 0 0 3.051 3.05q.544.277 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9 9 0 0 1-1.565-.667A6.96 6.96 0 0 0 1.018 7.5zm1.4-2.741a12.3 12.3 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.3 12.3 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987+.176 1.914+.399 2.741A13.6 13.6 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696q.18.469.395.872c.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a7 7 0 0 1-.598-.933 9 9 0 0 1-.481-1.079 8.4 8.4 0 0 0-1.198.49 7 7 0 0 0 2.276 1.522zm-1.383-2.964A13.4 13.4 0 0 1 3.508 8.5h-2.49a6.96 6.96 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667m6.728 2.964a7 7 0 0 0 2.275-1.521 8.4 8.4 0 0 0-1.197-.49 9 9 0 0 1-.481 1.078 7 7 0 0 1-.597.933M8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855q.216-.403.395-.872A12.6 12.6 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.96 6.96 0 0 0 14.982 8.5h-2.49a13.4 13.4 0 0 1-.437 3.008M14.982 7.5a6.96 6.96 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461q.266.502.482 1.078a8.4 8.4 0 0 0 1.196-.49 7 7 0 0 0-2.275-1.52c.218.283.418.597.597.932m-.488 1.343a8 8 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
                  </svg>
                  {/* Aquí coloca el otro SVG */}
                </div>
              </div>
            </div>
            <div className="col-6 text-end">
              <form className="navbar-form" role="search" action="#" method="get">
                <div className="form-group">
                  <div className="input-group">
                    <input type="text" name="s" id="search" placeholder="¿Qué deseas aprender?" className="form-control" style={{ fontSize: '80%', borderRadius: '5px' }} />
                    <button type="submit" className="btn btn-outline-secondary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
      
      {/* Navbar hijo */}
      <nav id="nav1" className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Currículum Renca</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/CursosDisponibles">CURSOS DISPONIBLES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/InformacionCursos"> INFO CURSOS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/PreguntasFrecuentes">PREGUNTAS FRECUENTES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/proyecto-react/src/Contacto/contacto.html">CONTACTO</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <a target="_blank" href="/proyecto-react/src/Login/index.html">
                <button className="btn bi-hand-thumbs-up" type="button">INGRESAR</button>
              </a>
              <a target="_blank" href="/proyecto-react/src/Login/">
                <button className="btn btn-outline-success ml-4" type="button">REGISTRARSE</button>
              </a>
            </form>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
