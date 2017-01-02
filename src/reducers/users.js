import { ADD_USER, REMOVE_USER } from '../constants/ActionTypes';

function addUser(state, user) {
  return state.concat(user);
}

function removeUser(state, id) {
  return state.filter(user => user.id !== id);
}

export default function users(state = [], action) {
  switch (action.type) {
    case ADD_USER:
      return addUser(state, action.user);
    case REMOVE_USER:
      return removeUser(state, action.userId);
    default:
      return state;
  }
}
