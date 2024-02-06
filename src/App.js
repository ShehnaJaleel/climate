import React from 'react';
import {BrowserRouter as Router,Route } from 'react-router-dom';
import Login from './components/Login';
import Weather from './components/Weather';
import Users from './components/Users';
import './App.css'


const App = ()=> {
  return (
    <Router>
      <Route path = "/login" ><Login/></Route>
      <Route path = "/weather"><Weather/></Route>
      <Route path = "/users"><Users/></Route>


    </Router>
  );
};

export default App;
