import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Layout from './src/components/Layout';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import {routes} from './src/routes/routes'
import RouteWithSubRoutes from './src/routes/RouteWithSubRoutes';
import { Provider } from 'react-redux'
import store from './src/store'


class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Router>
          <Layout>
            <Switch>
              { routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />) }
            </Switch>
          </Layout>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
