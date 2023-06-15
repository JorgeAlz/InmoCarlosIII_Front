import { toast } from 'react-toastify';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';


export const register = (nombre, apellidos, usuario, clave, email, telefono) => {
  return (dispatch) => {
    dispatch(registerRequest());
    fetch('http://localhost:8080/api/usuarios', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nombre, apellidos, usuario, clave , email, telefono})
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      dispatch(registerSuccess());
      console.log(response.headers.get('authorization'));
      return response;
    })
    .then(() => {
      toast.success('¡Registro exitoso!');
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    })
    .catch(error => {
      dispatch(registerFailure(error));
    });
  };
};

export const registerRequest = () => {
  return {
    type: 'REGISTER_REQUEST',
  };
};

export const registerSuccess = () => {
  return {
    type: 'REGISTER_SUCCESS'
  };
};

export const registerFailure = (error) => {
  return {
    type: 'REGISTER_FAILURE',
    payload: error.message, 
  };
};