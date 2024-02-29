import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <img src="../img/logo-renca.png" alt="Logo" className="logo" />
            </div>
            <div className="col-md-10 d-flex justify-content-center">
              <p className="footer-quote text-center">"La educación es el arma más poderosa que puedes usar para cambiar el mundo." - Nelson Mandela</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <p className="small text-center text-muted">&copy; 2024 Ruta de Aprendizaje. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>

      <div className="container py-1">
        <div className="row" style={{ width: '100%', marginLeft: 0, marginBottom: 'margin-down'}}>
          <div className="col-2" style={{ height: '15px', backgroundColor: '#ff571e'}}></div>
          <div className="col-2" style={{ height: '15px', backgroundColor: '#fda22d'}}></div>
          <div className="col-2" style={{ height: '15px', backgroundColor: '#ceff24'}}></div>
          <div className="col-2" style={{ height: '15px', backgroundColor: '#8ae571'}}></div>
          <div className="col-2" style={{ height: '15px', backgroundColor: '#02edca'}}></div>
          <div className="col-2" style={{ height: '15px', backgroundColor: '#0ab5fd'}}></div>
        </div>
      </div>

      <footer className="w-100 d-flex align-items-center justify-content-center flex-wrap">
        <p className="fs-5 px-3 pt-3">Currículum Renca. &copy; Todos Los Derechos Reservados 2024</p>
        <div id="iconos">
          <a href="#"><i className="bi bi-facebook"></i></a>
          <a href="#"><i className="bi bi-twitter"></i></a>
          <a href="#"><i className="bi bi-instagram"></i></a>
        </div>
      </footer>
    </>
  );
};

export default Footer;


