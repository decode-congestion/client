import React from 'react';
import Menu from 'src/bundles/common/components/Menu';
import {BrowserRouter as Router, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import characterRoutes from 'src/bundles/character/routes';
import charactersRoutes from 'src/bundles/characters/routes';


const routes = [
  ...characterRoutes,
  ...charactersRoutes
]

function App() {
  return (
    <Router>
      {routes}
      <Menu></Menu>
    </Router>
  );
}

export default App;
