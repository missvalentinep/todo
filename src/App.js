import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Layout from './hoc/Layout/Layout';
import Todo from './containers/Todo/Todo';
import Auth from './containers/Auth/Auth';

const app = props => {

  return (
    <Layout>
      <Switch>
        <Route path='/' exact component={Todo} />
        <Route path='/auth' component={Auth} />
      </Switch>
    </Layout>
  );
}

export default withRouter(app);
