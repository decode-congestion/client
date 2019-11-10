import React from 'react';
import Slot from '../Slot';
import styled, { css } from 'styled-components';
import { colors, fonts, borders } from 'src/styles'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2vw;
  justify-content: space-around;
`;

const index = (props) => {
  const slots = props.slots.map((slot) => {
    return <Slot type={slot.type} value={slot.value}></Slot>
  })
  return (
    <Container>
      {slots}
    </Container>
  );
};

export default index;