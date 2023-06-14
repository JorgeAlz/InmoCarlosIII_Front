import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/actions/registeractions';
import { Container, Form, Button } from 'react-bootstrap';


const Register = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstName] = useState('');
  const [surname, setSurname] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(firstname, surname, username, password));
  };


  return (
    <Container className="d-flex justify-content-center align-items-center mt-4">
  <div>
    <h1>Registro de usuarios</h1>
    <p>CITAS MEDICAS</p>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formUsername">
        <Form.Control
          size="sm"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Usuario"
        />
      </Form.Group>
      
      <Form.Group className='mt-1' controlId="formName">
        <Form.Control
          size="sm"
          type="text"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Nombre"
        />
      </Form.Group>

      <Form.Group className='mt-1' controlId="formSurname">
        <Form.Control
          size="sm"
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          placeholder="Apellidos"
        />
      </Form.Group>

      <Form.Group className='mt-1' controlId="formPassword">
        <Form.Control
          size="sm"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
        />
      </Form.Group>

      <Button className='mt-2' variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>
  </div>
</Container>
  );
};

export default Register;