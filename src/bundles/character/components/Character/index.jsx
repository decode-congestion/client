import React, {useEffect, useState} from 'react';
import styled, { css } from 'styled-components';
import CharacterSprite from 'src/bundles/common/components/CharacterSprite';
import { colors, fonts, borders } from 'src/styles'

const Container = styled.div`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${colors.one};
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  border-radius: 3vw;
`;

const Character = (props) => {
  const [character, setCharacter] = useState({});
  useEffect(()=>{
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
    setCharacter(test);
  }, [])
  return (
    <Container> 
      <CharacterSprite character={props.character}></CharacterSprite>
    </Container>
  );
};

export default Character;