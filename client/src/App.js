import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

import PrivateRoute from './utils/PrivateRoute.js';

import NavBar from './components/NavBar.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Jokes from './components/Jokes.js';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <PrivateRoute path='/jokes' component={Jokes} />
        <Redirect from='/' to='/jokes' />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
