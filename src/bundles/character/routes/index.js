import React from 'react';
import {Route} from 'react-router-dom';
import CharacterDisplay from '../components/CharacterDisplay';
export default [
  <Route key="characterdisplay" exact path="/character/:id" component={CharacterDisplay} >
  </Route>,
];