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
      console.log(response.payload);
      dispatch(loginSuccess(response.headers.get('authorization')));
      return response;
    })
    .then(() => {
      
      localStorage.setItem('user', usuario);
      alert('Inicio de sesión exitoso!');
      window.location.reload();
    })
  };
};

export const loginRequest = () => {
  return {
    type: 'LOGIN_REQUEST',
  };
};

export const loginSuccess = (token) => {
  sessionStorage.setItem('token', token);
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