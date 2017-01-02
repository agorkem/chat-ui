import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import messages from './messages';
import users from './users';

export default combineReducers({
  routing,
  messages,
  users,
});
