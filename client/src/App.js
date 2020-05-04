import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

//pages import
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'


function App() {
  const routes = [
    {
      path: '/',
      exact: true,
      children: <Login />
    },
    {
      path: '/dashboard',
      children: <Dashboard />
    }
  ]
  return (
    <Router>
      <div className="App">
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} {...route}/>
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
