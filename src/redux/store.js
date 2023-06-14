import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authreducer';

// const store = configureStore({
//   reducer: medicosReducer
// });
 const store = configureStore({
   reducer: {
    //  pacientes: pacientesReducer,
    //  medicos: medicosReducer,
    //  citas: citasReducer,
     auth: authReducer
   },
 });

export default store;