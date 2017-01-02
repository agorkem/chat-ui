import { ADD_MESSAGE, REMOVE_MESSAGE } from '../constants/ActionTypes';

function addMessage(state, message) {
  return state.concat(message);
}

function removeMessage(state, id) {
  return state.filter(message => message.id !== id);
}

export default function messages(state = [], action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return addMessage(state, action.message);
    case REMOVE_MESSAGE:
      return removeMessage(state, action.messageId);
    default:
      return state;
  }
}
