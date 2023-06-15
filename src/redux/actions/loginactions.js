import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (usuario, clave) => {
  return (dispatch) => {
    dispatch(loginRequest());


    fetch('http://localhost:8080/login', {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify({ usuario, clave })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      dispatch(loginSuccess(response.headers.get('authorization')));
      return response;
    })
    .then(() => {
      localStorage.setItem('user', usuario);
      toast.success('¡Inicio de sesión exitoso!');
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    })
  };
};

export const loginRequest = () => {
  return {
    type: 'LOGIN_REQUEST',
  };
};

export const loginSuccess = (token) => {
  Cookies.set('token', token, { secure: true });
  return {
    type: 'LOGIN_SUCCESS',
    payload: token,
  };
};

export const loginFailure = (error) => {
  return {
    type: 'LOGIN_FAILURE',
    payload: error,
  };
};