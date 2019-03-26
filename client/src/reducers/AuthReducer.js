import { SET_CURRENT_USER } from '../actions/Types';
import { isEmpty } from '../hocs/is-empty';

const initialState = {
  isAuthenticated: false,
  user: []
}

export function authReducer(state = initialState, action ) {
  switch(action.type) {
    case SET_CURRENT_USER:
    return {
      ...state,
      isAuthenticated: !isEmpty(action.payload),
      user: [action.payload]
    }
    default:
    return state;
  }
}
