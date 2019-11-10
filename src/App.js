import React from 'react';
import Menu from 'src/bundles/common/components/Menu';
import {BrowserRouter as Router, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import characterRoutes from 'src/bundles/character/routes';
import charactersRoutes from 'src/bundles/characters/routes';
import joustRoutes from 'src/bundles/joust/routes';
import gearRoutes from 'src/bundles/gear/routes';


const routes = [
  ...characterRoutes,
  ...charactersRoutes,
  ...gearRoutes,
  ...joustRoutes
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
