
import { REGISTER_REQUEST, REGISTER_FAILURE, REGISTER_SUCCESS } from '../actions/registeractions';
  
const initialState = {
  loading: false,
  token: null,
  error: null
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    return {
      ...state,
      loading: true,
      error: null,
    };
  case REGISTER_SUCCESS:
    return {
      ...state,
      loading: false,
      token: action.payload,
      error: null,
    };
  case REGISTER_FAILURE:
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
    default:
      return state;
  }
};

export default registerReducer;