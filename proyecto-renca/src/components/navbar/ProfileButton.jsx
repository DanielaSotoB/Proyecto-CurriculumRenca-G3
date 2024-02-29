import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

const ProfileButton = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleLogoutClick = () => {
    // Lógica para cerrar sesión...
  };

  return (
    <Dropdown show={showMenu} onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>
      <Dropdown.Toggle variant="transparent" id="dropdown-basic">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16" style={{ cursor: 'pointer' }}>
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
          <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
        </svg>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/profile">Perfil</Dropdown.Item>
        <Dropdown.Item onClick={handleLogoutClick}>Cerrar sesión</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProfileButton;

