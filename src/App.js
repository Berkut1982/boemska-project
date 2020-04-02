import React, { Fragment } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/home/Home';
import CarsList from './components/carsList/CarsList';

import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path='/' component={Landing} />
      <Route exact path='/home' component={Home} />

      <section className='container'>
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Router path='./carslist' component={CarsList} />
        </Switch>
      </section>
    </Fragment>
  </Router>
);

export default App;
