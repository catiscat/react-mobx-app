import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { HashRouter as Router, Route } from 'react-router-dom';
import client from './middlewares/client';
import * as store from './store';
import routes from './routes';
import './sass/main.scss'

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      <route.component {...props} routes={route.routes} />
    )}
  />
);

function renderRoutes() {
  const a = routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />);
  return a;
}

ReactDOM.render((
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router>
        <div>
          {renderRoutes()}
        </div>
      </Router>
    </Provider>
  </ApolloProvider>
), document.getElementById('mount'));
