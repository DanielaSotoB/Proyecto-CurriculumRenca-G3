import React, { useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { IoNotificationsOutline, IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import './NavbarAdministrador.css';

const NavbarAdministrador = () => {
    const [darkMode, setDarkMode] = React.useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
  return (
    <Navbar bg={darkMode ? 'dark' : 'light'} expand="lg" variant={darkMode ? 'dark' : 'light'}>
      <Navbar.Brand href="/AdmiPanelView">
        <a href="">
          <img
            src="../img/logo-renca.png"
            style={{ maxHeight: '60px' }}
            alt="Ilustre Municipalidad de Renca"
          />
        </a>
        Administrador de Cursos
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Cursos</Nav.Link>
          <Nav.Link href="/AdmiPanelUsuarios">Estudiantes</Nav.Link>
          <NavDropdown title="Más" id="basic-nav-dropdown">
            <NavDropdown.Item href="./">Pagina principal</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="#notifications">
            <IoNotificationsOutline size={24} />
          </Nav.Link>
          <Nav.Link href="#dark-mode" onClick={toggleDarkMode}>
            {darkMode ? <IoSunnyOutline size={24} /> : <IoMoonOutline size={24} />}
          </Nav.Link>
          <NavDropdown
            alignRight
            title={
              <div className="d-flex align-items-center">
                <img
                  src="https://media.licdn.com/dms/image/D5603AQGIS8_oH390Wg/profile-displayphoto-shrink_400_400/0/1705586748936?e=1715212800&v=beta&t=kbOgtG-g9e2FvHq7eRy2EuVgD7xMe_lPnB6Gfh7k2ro"
                  style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '8px' }}
                  alt="Perfil de Usuario"
                />
                Admi - Janis Aravena
              </div>
            }
            id="nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.5">Perfil</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.7">Cerrar Sesión</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarAdministrador;
