import { AUTHORIZE } from '../constants/ActionTypes';

function authorizeUser(state, user) {
  return user;
}

export default function users(state = false, action) {
  switch (action.type) {
    case AUTHORIZE:
      return authorizeUser(state, action.user);
    default:
      return state;
  }
}
