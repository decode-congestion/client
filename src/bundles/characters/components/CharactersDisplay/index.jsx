import React, {useState, useEffect} from 'react';
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
  {
    id: 1,
    name: 'name',
    helmet: {sprite: 1, bonus: 10, patron: 1},
    gloves: {sprite: 1, bonus: 10, patron: 1},
    chest: {sprite: 1, bonus: 10, patron: 1},
    legs: {sprite: 1, bonus: 10, patron: 1},
    feet: {sprite: 1, bonus: 10, patron: 1},
    sheild: {sprite: 1, bonus: 10, patron: 1}
  },
  {
    id: 2,
    name: 'name',
    helmet: {sprite: 1, bonus: 10, patron: 1},
    gloves: {sprite: 1, bonus: 10, patron: 1},
    chest: {sprite: 1, bonus: 10, patron: 1},
    legs: {sprite: 1, bonus: 10, patron: 1},
    feet: {sprite: 1, bonus: 10, patron: 1},
    sheild: {sprite: 1, bonus: 10, patron: 1}
  },
  {
    id: 3,
    name: 'name',
    helmet: {sprite: 1, bonus: 10, patron: 1},
    gloves: {sprite: 1, bonus: 10, patron: 1},
    chest: {sprite: 1, bonus: 10, patron: 1},
    legs: {sprite: 1, bonus: 10, patron: 1},
    feet: {sprite: 1, bonus: 10, patron: 1},
    sheild: {sprite: 1, bonus: 10, patron: 1}
  },
  {
    id: 4,
    name: 'name',
    helmet: {sprite: 1, bonus: 10, patron: 1},
    gloves: {sprite: 1, bonus: 10, patron: 1},
    chest: {sprite: 1, bonus: 10, patron: 1},
    legs: {sprite: 1, bonus: 10, patron: 1},
    feet: {sprite: 1, bonus: 10, patron: 1},
    sheild: {sprite: 1, bonus: 10, patron: 1}
  },
  {
    id: 5,
    name: 'name',
    helmet: {sprite: 1, bonus: 10, patron: 1},
    gloves: {sprite: 1, bonus: 10, patron: 1},
    chest: {sprite: 1, bonus: 10, patron: 1},
    legs: {sprite: 1, bonus: 10, patron: 1},
    feet: {sprite: 1, bonus: 10, patron: 1},
    sheild: {sprite: 1, bonus: 10, patron: 1}
  }
]
const testRoster = [
  {
    id: 1,
    name: 'name',
    helmet: {sprite: 1, bonus: 10, patron: 1},
    gloves: {sprite: 1, bonus: 10, patron: 1},
    chest: {sprite: 1, bonus: 10, patron: 1},
    legs: {sprite: 1, bonus: 10, patron: 1},
    feet: {sprite: 1, bonus: 10, patron: 1},
    sheild: {sprite: 1, bonus: 10, patron: 1}
  },
  {
    id: 2,
    name: 'name',
    helmet: {sprite: 1, bonus: 10, patron: 1},
    gloves: {sprite: 1, bonus: 10, patron: 1},
    chest: {sprite: 1, bonus: 10, patron: 1},
    legs: {sprite: 1, bonus: 10, patron: 1},
    feet: {sprite: 1, bonus: 10, patron: 1},
    sheild: {sprite: 1, bonus: 10, patron: 1}
  }
]

const CharactersDisplay = () => {
  const [drivers, setDrivers] = useState([]);
  const [roster, setRoster] = useState([]);
  useEffect(() => {
    //fetch users characters and roster
    setDrivers(test);
    setRoster(testRoster);
  }, [])
  const addRoster = (character) => {
    let old = [...roster];
    if(roster.length>=5){
      old.shift();
    }
    setRoster([...old, character]);
    //post to update roster
  };
  const removeRoster = (character) => {
    setRoster(roster.filter((characterRoster)=>{
      return character.id !== characterRoster.id;
    }))
    //post to update roster
  };
  return (
    <Container>
      <Roster removeRoster={removeRoster} characters={roster}></Roster>
      <Characters removeRoster={removeRoster} addRoster={addRoster} roster={roster} characters={drivers}></Characters>
    </Container>
  );
};

export default CharactersDisplay;