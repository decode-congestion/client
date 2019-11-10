import React, {useState, useEffect} from 'react';
import styled, { css } from 'styled-components';
import Roster from '../Roster';
import Characters from '../Characters';
import { colors, fonts, borders } from 'src/styles'
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();

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

const armorLookup = {
  1: 'helmet',
  2: 'chest',
  3: 'gloves',
  4: 'legs',
  5: 'boots',
  6: 'sheilds'
}

const driverLookup = {
  0: 'Lisa',
  1: 'Lou',
  2: 'Max',
  3: 'Sean',
  4: 'Frank',
  5: 'Doug',
  6: 'Lee'
}

const CharactersDisplay = () => {
  const [drivers, setDrivers] = useState([]);
  const [roster, setRoster] = useState([]);
  useEffect(() => {
    // fetch users characters and roster
    Promise.all([
      axios({method: 'get', headers: {'Access-Control-Allow-Origin': '*'}, url:`http://6e8733a1.ngrok.io/api/users/${cookies.get('id')}/collected`}),
      axios({method: 'get', headers: {'Access-Control-Allow-Origin': '*'}, url:`http://6e8733a1.ngrok.io/api/users/${cookies.get('id')}/roster_vehicles`})
    ]).then(res=>{
      const rosterRes = res[1].data;
      const driverRes = res[0].data;
      const newRoster = rosterRes.roster_vehicles.map(roster => {
        console.log('rouster', roster);
        const build =  {
          id: roster.vehicle_id,
          name: driverLookup[roster.vehicle_id]
        };
        for( let loot of rosterRes.loots){
          if(loot.vehicle_id === loot.id){
            build[armorLookup[loot.type]] = {sprite: loot.sprite, bonus: loot.modifier, patron: loot.user_id, name: loot.name};
          }
        }
        return build;
      })
      const newDrivers = rosterRes.roster_vehicles.map(roster => {
        console.log('rouster', roster);
        const build =  {
          id: roster.vehicle_id,
          name: driverLookup[roster.vehicle_id]
        };
        for( let loot of rosterRes.loots){
          if(loot.vehicle_id === loot.id){
            build[armorLookup[loot.type]] = {sprite: loot.sprite, bonus: loot.modifier, patron: loot.user_id, name: loot.name};
          }
        }
        return build;
      })
      setRoster(newRoster);
    }).catch(err => {
      console.log(err);
    });

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