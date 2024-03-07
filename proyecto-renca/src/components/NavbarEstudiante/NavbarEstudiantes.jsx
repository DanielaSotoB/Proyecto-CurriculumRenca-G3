import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {
  IoNotificationsOutline,
  IoBookOutline,
  IoSearchOutline,
  IoPersonCircleOutline,
  IoMoonOutline,
  IoSunnyOutline
} from 'react-icons/io5';
import './NavbarEstudiante.css';

const NavbarEstudiante = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showNotificationCount, setShowNotificationCount] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleNotificationClick = () => {
    setShowNotificationCount(false);
    setTimeout(() => setShowNotificationCount(true), 240000); // Oculta el contador durante 4 minutos
  };

  return (
    <Navbar bg={darkMode ? 'dark' : 'light'} expand="lg" variant={darkMode ? 'dark' : 'light'}>
      <Navbar.Brand href="/Estudiantes">
        <a href="">
          <img
            src="../img/logo-renca.png"
            style={{ maxHeight: '60px' }}
            alt="Ilustre Municipalidad de Renca"
          />
        </a>
        Portal del Estudiante
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/CursoEstudiante">
            <IoBookOutline size={24} className="mr-1" />
            Mis Cursos
          </Nav.Link>
          <Nav.Link href="/BusquedaEstudiante">
            <IoSearchOutline size={24} className="mr-1" />
            Buscar Cursos
          </Nav.Link>
          <Nav.Link href="/DiplomaEstudiantes">
            <IoBookOutline size={24} className="mr-1" />
            Mis Diplomas
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="/Notificaciones" onClick={handleNotificationClick}>
            {showNotificationCount && <span className="notification-count">1</span>}
            <IoNotificationsOutline size={24} />
          </Nav.Link>
          <Nav.Link href="#dark-mode" onClick={toggleDarkMode}>
            {darkMode ? <IoSunnyOutline size={24} /> : <IoMoonOutline size={24} />}
          </Nav.Link>
          <NavDropdown
            alignRight
            title={
              <div className="d-flex align-items-center">
                <IoPersonCircleOutline size={30} className="mr-2" />
                Estudiante - José Martinez
              </div>
            }
            id="nav-dropdown"
          >
            <NavDropdown.Item href="/EditarEstudiante">Mi Perfil</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#cerrar-sesion">Cerrar Sesión</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarEstudiante;
