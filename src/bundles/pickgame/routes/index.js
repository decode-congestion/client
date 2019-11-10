import React from 'react';
import {Route} from 'react-router-dom';
import gameDisplay from '../components/gameDisplay';
export default [
  <Route key="joust" exact path="/game/:mode" component={gameDisplay} >
  </Route>,
];