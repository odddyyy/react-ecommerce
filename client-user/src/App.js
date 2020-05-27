import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

//pages
import Home from './pages/Home'

//components
import Navbar from './components/NavigationBar'

function App() {

  //routes array
  const routes = [
    {
      path: '/',
      exact: true,
      children: <Home />
    }
  ]
  return (
    <Router>
      <div>
        <Navbar />
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
