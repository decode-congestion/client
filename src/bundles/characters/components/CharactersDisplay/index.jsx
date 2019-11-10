import React, {useState} from 'react';
import styled, { css } from 'styled-components';
import Roster from '../Roster';
import Characters from '../Characters';
import { colors, fonts, borders } from 'src/styles'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 40vw;
`;
const test = [
  {name: "nima"},
  {name: "mimi"},
  {name: "ada"},
  {name: "matt"},
  {name: "travis"},
]

const index = () => {
  return (
    <Container>
      <Roster characters={test}></Roster>
      <Characters characters={test}></Characters>
    </Container>
  );
};

export default index;