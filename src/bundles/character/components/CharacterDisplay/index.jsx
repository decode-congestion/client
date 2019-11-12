import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Character from '../Character';
import Stats from '../Stats';
import GearRow from '../GearRow';
import { colors, fonts, borders } from 'src/styles'
import axios from 'axios';
import Cookies from 'universal-cookie';

let cookies = new Cookies();

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
const armorLookup = {
  1: 'helmet',
  2: 'chest',
  3: 'gloves',
  4: 'legs',
  5: 'feet',
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

const CharacterDisplay = (props) => {
  let [character, setCharacter] = useState({});
  const [roster, setRoster] = useState([]);
  useEffect(() => {
    // fetch users characters and roster
      axios({method: 'get', headers: {'Access-Control-Allow-Origin': '*'}, url:`http://46ff7fc8.ngrok.io/api/users/${cookies.get('id')}/roster_vehicles`})
      .then(res=>{
        const rosterRes = res.data;
        let build = {};
        rosterRes.roster_vehicles.forEach(roster => {
          console.log('one', roster, props.match.params.id);
          if(roster.vehicle_id == props.match.params.id){
            build =  {
              id: roster.vehicle_id,
              name: driverLookup[roster.vehicle_id]
            };
            for( let loot of rosterRes.loots){
              console.log("LOOOT", loot);
              if(loot.vehicle_id === roster.vehicle_id){
                build[armorLookup[loot.type]] = {sprite: loot.sprite, bonus: loot.modifier, patron: loot.user_id, name: loot.name};
              }
            }
          }
        })
        setCharacter(build);
      });
  },[]);

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