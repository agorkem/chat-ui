import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { pages } from 'constants/AppSettings';
import App from 'containers/App';
import Chat from 'containers/Chat';
import Login from 'containers/Login';

export default (
  <Route path={pages.main} component={App}>
    <IndexRoute component={Chat} />
    <Route path={pages.login} component={Login} />
  </Route>
);
