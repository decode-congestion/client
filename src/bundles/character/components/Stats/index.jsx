import React from 'react';
import styled, { css } from 'styled-components';
import { colors, fonts, borders } from 'src/styles'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`;

const Stat = styled.p`
  width: 100%;
  padding: 3vw;
  font-weight: bold;
  font-size: 1.2rem; 
  margin: 0;
  background-color: rgba(256, 256, 256, 0.4);
`;

const index = (props) => {
  let bonus = 0;
  let equiped = 0;
  for(const [key, thing] of Object.entries(props.character)){
    if(thing.bonus){
      equiped++;
      bonus += thing.bonus;
    }
  }
  return (
    <Container>
      <Stat>Bonus: {bonus}+</Stat>
      <Stat>Equiped: {equiped}</Stat>
      <Stat>Fans: 12</Stat>
      <Stat>Champion: 6</Stat>
    </Container>
  );
};

export default index;