import { push } from 'react-router-redux';
import * as types from 'constants/ActionTypes';
import { pages } from 'constants/AppSettings';
import { v4 } from 'node-uuid';
import { createChannel } from 'helpers/connection';

export function addMessage(message) {
  return {
    type: types.ADD_MESSAGE,
    message: {
      id: v4(),
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

export function authorize(user) {
  return { type: types.AUTHORIZE, user };
}

export function joinChannel(name) {
  return { type: types.JOIN_CHANNEL, name };
}

export function requestToJoinChannel(name) {
  return (dispatch) => {
    createChannel(name).then(() => {
      dispatch(joinChannel(name));
      dispatch(push('/'));
    });
  };
}

export function login(name) {
  return (dispatch) => {
    const id = v4();

    dispatch(addUser({ name, id }));
    dispatch(authorize({ name, id }));
    dispatch(push(pages.joinChannel));
  };
}
