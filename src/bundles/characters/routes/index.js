import React from 'react';
import {Route} from 'react-router-dom';
import CharactersDisplay from '../components/CharactersDisplay';
export default [
  <Route key="charactersdisplay" exact path="/characters" component={CharactersDisplay} >
  </Route>,
];