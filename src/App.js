import React from 'react';
import {BrowserRouter as Router,Route } from 'react-router-dom';
import Login from './components/Login';
import Weather from './components/Weather';
import Users from './components/Users'


const App = ()=> {
  return (
    <Router>
      <Route path = "/login" component= {Login}></Route>
      <Route path = "/weather" component= {Weather}></Route>
      <Route path = "/users" component= {Users}></Route>


    </Router>
  );
}

export default App;
