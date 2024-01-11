
     // Import necessary dependencies
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { faFingerprint } from '@fortawesome/free-solid-svg-icons';
import { faCat } from '@fortawesome/free-solid-svg-icons';

// Login component
const LoginComponent = () => {
  // State for storing username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle login button click
  const handleLogin = () => {
    // Predefined username and password
    const predefinedUsername = 'Jhon';
    const predefinedPassword = 'Jhon#1234';

    // Check if both username and password are provided
    if (!username || !password) {
      setErrorMessage('Por favor, ingrese usuario y contraseña.');
      return;
    }

    // Check if entered username and password match the predefined values
    if (username === predefinedUsername && password === predefinedPassword) {
      // Successful login, navigate to '/admin'
      navigate('/admin');
    } else {
      // Display error message for incorrect credentials
      setErrorMessage('Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.');
    }
  };

  // Hook to enable navigation
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
              setErrorMessage(''); // Clear error message when user starts typing
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
              setErrorMessage(''); // Clear error message when user starts typing
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
