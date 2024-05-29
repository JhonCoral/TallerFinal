
     // 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { faFingerprint } from '@fortawesome/free-solid-svg-icons';
import { faCat } from '@fortawesome/free-solid-svg-icons';

// Login component
const LoginComponent = () => {
  // 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  
  const handleLogin = () => {
    //  
    const predefinedUsername = 'Jhon';
    const predefinedPassword = 'Jhon#1234';

    // 
    if (!username || !password) {
      setErrorMessage('Por favor, ingrese usuario y contraseña.');
      return;
    }

    // 
    if (username === predefinedUsername && password === predefinedPassword) {
      // 
      navigate('/admin');
    } else {
      // 
      setErrorMessage('Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.');
    }
  };

  // 
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: '#C5CAE9',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      <h2 style={{ color: '#333', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
        <FontAwesomeIcon icon={faPaw} style={{ marginRight: '10px' }} />
        Login
      </h2>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
     >
        <div className="mb-3">
          <label htmlFor="username" style={{ fontWeight: 'bold' }}>
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setErrorMessage(''); // 
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" style={{ fontWeight: 'bold' }}>
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrorMessage(''); // 
            }}
          />
        </div>
        <button
            type="button"
            className="btn btn-dark" // Color de fondo del botón
            onClick={handleLogin}
            style={{
                fontWeight: 'bold',
                fontSize: '25px',
                width: '200px', // Ajusta el ancho del botón según tu diseño
                position: 'relative',
            }}
            >
            <FontAwesomeIcon
                icon={faCat}
                style={{
                color: 'white', // Color del ícono
                marginRight: '5px',
                position: 'absolute',
                left: '5%', // Ajusta la posición horizontal según tu diseño
                top: '50%',  // Ajusta la posición vertical según tu diseño
                transform: 'translateY(-50%)', // Centra el ícono verticalmente en el botón
                }}
            />
            <span style={{ color: 'white' }}>Login</span>
        </button>
        {errorMessage && <p style={{ color: 'black', marginTop: '10px' }}>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default LoginComponent;
