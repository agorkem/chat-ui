import { JOIN_CHANNEL } from '../constants/ActionTypes';

function joinChannel(state, name) {
  return name;
}

export default function users(state = null, action) {
  switch (action.type) {
    case JOIN_CHANNEL:
      return joinChannel(state, action.name);
    default:
      return state;
  }
}
