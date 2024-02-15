
import './Footer.css'; // Asegúrate de que la ruta sea correcta

const Footer = () => {
  return (
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
  );
};

export default Footer;

