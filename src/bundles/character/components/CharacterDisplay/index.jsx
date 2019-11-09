import React from 'react';
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
  background-image: url(${require('src/assets/images/characterbg2.png')});
  background-size: cover;
  background-position: center;
  height: 100vh;
  margin: 0;
`

const index = () => {
  return (
    <Container>
      <Rows>
        <Title> CHARACTER </Title>
        <Stats character={test.character}/>
        <GearRow slots={['shoulders', 'head', 'chest']}/>
        <Character character={test.character}/>
        <GearRow slots={['legs', 'feet', 'belt']}/>
      </Rows>
    </Container>
  );
};

export default index;