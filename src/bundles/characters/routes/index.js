import React from 'react';
import {Route} from 'react-router-dom';
import CharactersDisplay from '../components/CharactersDisplay';
export default [
  <Route key="characters display" exact path="/characters" component={CharactersDisplay} >
  </Route>
];