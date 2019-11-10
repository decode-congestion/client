import React from 'react';
import {Route} from 'react-router-dom';
import JoustDisplay from '../components/JoustDisplay';
export default [
  <Route key="joust" exact path="/joust" component={JoustDisplay} >
  </Route>,
];