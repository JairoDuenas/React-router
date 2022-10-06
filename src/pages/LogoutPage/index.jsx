import React from 'react';
import { useAuth } from '../../auth';

const LogoutPage = () => {
  const auth = useAuth();

  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  }

  return (
    <>
      <h1>LogoutPage</h1>
      <form onSubmit={logout}>
      <label>¿Seguro que quiere sali?</label>
      
      <button type='submit'>SALIR</button>
  </form>
    </>
  );
}

export default LogoutPage;
