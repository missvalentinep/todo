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
        <Route path='/login' render={() => <Auth signup={false} />} />
        <Route path='/signup' render={() => <Auth signup={true} />} />
        <Route path='/logout' render={() => <Auth logout={true} />} />
      </Switch>
    </Layout>
  );
}

export default withRouter(app);
