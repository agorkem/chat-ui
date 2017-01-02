import { push } from 'react-router-redux';
import * as types from 'constants/ActionTypes';
import { pages } from 'constants/AppSettings';

export function addMessage(message) {
  return {
    type: types.ADD_MESSAGE,
    message: {
      id: +(new Date()),
      text: message,
    },
  };
}

export function removeMessage(messageId) {
  return { type: types.REMOVE_MESSAGE, messageId };
}

export function addUser(user) {
  return { type: types.ADD_USER, user };
}

export function removeUser(userId) {
  return { type: types.REMOVE_USER, userId };
}

export function saveUser(user) {
  return (dispatch) => {
    localStorage.user = user;
    return dispatch(addUser(user));
  };
}

export function loadUser() {
  return (dispatch) => {
    const loadedUser = {
      name: 'Gorkem',
      id: 0,
    };

    if (loadedUser) {
      return dispatch(addUser(loadedUser));
    }

    return dispatch(push(pages.login));
  };
}

export function login() {
  return () => {

  };
}
