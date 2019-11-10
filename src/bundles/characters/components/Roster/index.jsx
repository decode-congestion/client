import React from 'react';
import styled, { css } from 'styled-components';
import CharacterSprite from 'src/bundles/common/components/CharacterSprite';
import { colors, fonts, borders } from 'src/styles'

const Container = styled.div`
  position: fixed;
  top: 0;
  overflow-y: hidden;
  overflow-x: scroll;
  width: 100vw;
  height: 40vw;
  perspective: 1px;
  z-index: 5;
  background-color: ${colors.three};
`;
const Scroll = styled.div`
  width: 200vw;
`;

const Round = styled.div`
  display: inline-block;
  height: 40vw;
  width: 40vw;
  p {
    position: absolute;
    background-color: ${colors.white};
    border-radius: 2vw;
    z-index: 5;
    margin-top: 1vw;
    padding: 1vw;
    width: 20vw;
    text-align: center;
    font-weight: bold;
  }
`;

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
    return <Round><p>{character.name}</p><CharacterSprite  left="50" character={test}></CharacterSprite></Round>;
  })
  return (
    <Container>
      <Scroll>
        {characters}
      </Scroll>
    </Container>
  );
};

export default index;