import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Character from '../Character';
import Stats from '../Stats';
import GearRow from '../GearRow';
import { colors, fonts, borders } from 'src/styles'

const test = {
  character: {
    number: 1
  }
}

const Rows = styled.div`
  display: flex; 
  flex-direction: column;
`;
const Title = styled.h1`
  margin: 1vh;
`
const Container = styled.div`
  text-align: center;
  overflow: hidden;
  background-image: url(${require('src/assets/images/characterbg2.png')});
  background-size: cover;
  background-position: center;
  height: 100vh;
  margin: 0;
`

const CharacterDisplay = () => {
  let [character, setCharacter] = useState({});
  useEffect(()=>{
    const test = {
      id: 1,
      name: 'name',
      helmet: {sprite: 1, bonus: 10, patron: 1, name: 'gloves of fire'},
      gloves: {sprite: 1, bonus: 10, patron: 1, name: 'gloves of fire'},
      chest: {sprite: 1, bonus: 10, patron: 1, name: 'gloves of fire'},
      legs: {sprite: 1, bonus: 10, patron: 1, name: 'gloves of fire'},
      feet: {sprite: 1, bonus: 10, patron: 1, name: 'gloves of fire'},
      sheild: {sprite: 1, bonus: 10, patron: 1, name: 'gloves of fire'}
    }
    setCharacter(test);
  },[]);
  return (
    <Container>
      <Rows>
        <Title> {character.name} </Title>
        <Stats character={character}/>
        <GearRow slots={[{type: 'gloves', value: character.gloves }, {type: 'helmet', value: character.helmet }, {type: 'chest', value: character.chest }]}/>
        <Character character={character}/>
        <GearRow slots={[{type: 'legs', value: character.legs }, {type: 'feet', value: character.feet }, {type: 'sheild', value: character.sheild }]}/>
      </Rows>
    </Container>
  );
};

export default CharacterDisplay;