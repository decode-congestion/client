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
    const color = randColors[Math.floor(Math.random() * 6)];
    return <Character color={color} character={character}></Character>
  })
  return (
    <Container>
      {characters};
    </Container>
  );
};

export default index;