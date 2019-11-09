import React from 'react';
import {Route} from 'react-router-dom';
import GearList from '../components/GearList';
export default [
  <Route key="gearlist" exact path="/gear" component={GearList} >
  </Route>,
];