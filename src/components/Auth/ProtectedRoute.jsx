import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

function ProtectedRoute({ element }) {
  const { token } = useContext(AuthContext);

  return token ? (
    <>{element}</>
  ) : (
    <Navigate to="/" replace />
  );
}

export default ProtectedRoute;
