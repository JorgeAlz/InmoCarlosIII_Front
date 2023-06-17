import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/loginactions';
import { Container, Form, Button } from 'react-bootstrap';
import Cookies from 'js-cookie';
import logo from "../../img/LOGOINMO2.png"


const LoginForm2 = () => {

  const token1 = Cookies.get('token');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  const evaluarLogin = () => {
    if (token1 == null) {
    } else {
      // console.log("redireccion a home");
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-4">
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="flex flex-col items-center mx-auto max-w-lg text-center">
            <a href="/" className="w-32">
              <img src={logo} alt="Logo"></img>
            </a>
            <h1 className="text-2xl font-bold sm:text-3xl mt-8">¡Te damos la bienvenida!</h1>
          </div>
          <Form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <Form.Group controlid="formEmail">
              <Form.Label htmlFor="email" className="sr-only">User</Form.Label>
              <div className="relative">
                <Form.Control
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm border shadow-md focus:outline-none"
                  placeholder="Usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </span>
              </div>
            </Form.Group>
            <Form.Group controlid="formPassword">
              <Form.Label htmlFor="password" className="sr-only">Password</Form.Label>
              <div className="relative">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm border shadow-md focus:outline-none"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer"
                  onClick={handleTogglePassword}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </span>
              </div>
            </Form.Group>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                ¿No tienes cuenta?&nbsp;
                <a className="underline" href="/register">Regístrate ya</a>
              </p>
              <Button onClick={evaluarLogin} className="inline-block rounded-md bg-green-600 px-5 py-3 text-sm font-medium text-white transition active:bg-green-500 active:scale-95" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </div>
        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img alt="Welcome" src="https://www.papelpintadoonline.com/73458-thickbox_default/papel-pintado-espiga-verde-oscura-GCO_10397_73_28.jpg" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </section>
    </Container>
  );
};

export default LoginForm2;