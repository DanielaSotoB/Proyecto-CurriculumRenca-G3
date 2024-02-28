import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ path, element }) => {
  const isAuthenticated = localStorage.getItem('token'); // Suponiendo que has almacenado el token de autenticación en el almacenamiento local

  return isAuthenticated ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/LoginRegistro" replace />
  );
};

export default ProtectedRoute;

