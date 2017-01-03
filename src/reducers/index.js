import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import messages from './messages';
import users from './users';
import auth from './auth';
import channel from './channel';

export default combineReducers({
  routing,
  messages,
  users,
  auth,
  channel,
});
