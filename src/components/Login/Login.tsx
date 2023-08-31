// import { useState } from 'react'
import { Button, TextField } from '@mui/material';
import './Login.css'

import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate()

  return (
    <div id="login-container">
      <div className="content-wrapper">
        <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>¡Bienvenido al cuestionario de nuestra presentación!</p>
        <div className="input-container">
          <TextField id="outlined-basic" label="Nombre y Apellido" variant="outlined" fullWidth />
        </div>
        <div id='buttonComponent'>
          <Button variant="contained" style={{ backgroundColor: '#46b80d', color: '#FFFFFF', minWidth: '20vh' }} onClick={() => navigate('./quiz')}>
            Comenzar
          </Button>
        </div>
      </div>
    </div>
  );
}