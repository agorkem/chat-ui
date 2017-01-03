import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { pages } from 'constants/AppSettings';
import App from 'containers/App';
import Chat from 'containers/Chat';
import Login from 'containers/Login';
import JoinChannel from 'containers/JoinChannel';
import checkAuthorization from 'helpers/hocs/checkAuthorization';

export default (
  <Route path={pages.main} component={App}>
    <IndexRoute component={checkAuthorization(Chat)} />
    <Route path={pages.login} component={Login} />
    <Route path={pages.joinChannel} component={checkAuthorization(JoinChannel)} />
  </Route>
);
