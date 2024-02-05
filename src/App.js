import React from 'react';
import {BrowserRouter as Router,Route } from 'react-router-dom';
import Login from './components/Login';
import Weather from './components/Weather';


const App = ()=> {
  return (
    <Router>
      <Route path = "/login" component= {Login}></Route>
      <Route path = "/weather" component= {Weather}></Route>

    </Router>
  );
}

export default App;
