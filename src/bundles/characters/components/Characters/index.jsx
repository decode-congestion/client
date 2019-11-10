import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Character from '../Character';
import styled, { css } from 'styled-components';
import { colors, fonts, borders } from 'src/styles'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
const randColors = Object.values(colors);

const index = (props) => {
  const characters = props.characters.map((character) => {
    const test = {
      id: 1,
      name: 'name',
      helmet: {sprite: 1, bonus: 10, patron: 1},
      gloves: {sprite: 1, bonus: 10, patron: 1},
      chest: {sprite: 1, bonus: 10, patron: 1},
      legs: {sprite: 1, bonus: 10, patron: 1},
      feet: {sprite: 1, bonus: 10, patron: 1},
      sheild: {sprite: 1, bonus: 10, patron: 1}
    }
    const color = randColors[Math.floor(Math.random() * 6)];
    return <Character color={color} character={test}></Character>
  })
  return (
    <Container>
      {characters};
    </Container>
  );
};

export default index;