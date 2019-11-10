import React from 'react';
import Slot from 'src/bundles/character/components/Slot';
import styled, { css } from 'styled-components';
import { colors, fonts, borders } from 'src/styles'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: black;
`;
const GearRow = styled.div`
  width: 96vw;
  display: flex;
  color: white;
`;
const Stats = styled.div`
  display: flex;
  color: white;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  span{
    color: ${colors.five};
  }
`;
const Button =  styled.button`
  background-color: #77dd77;
  backdrop-filter: blur(10px);
  border-style: none;
  border-radius: 50%;
  width: 12vw;
  height: 12vw;
`;
const test = {
  onClick: null,
  currentGear: null,
  type: 'helmet',
  value: {sprite: 1, bonus: 10, patron: 1, name: "gear of the golden god"}
}
const index = (props) => {
  const gear = [1,2,3,4,5,56,6];
  const gearList = gear.map((piece)=> {
    return <GearRow><Slot {...test} ></Slot><Stats><p><span>{test.value.name}</span></p><Button></Button></Stats></GearRow>
  })
  return (
    <Container>
      {gearList}
    </Container>
  );
};

export default index;