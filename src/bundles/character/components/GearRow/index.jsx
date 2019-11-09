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
    return <Slot type={props.type} character={props.character}></Slot>
  })
  return (
    <Container>
      {slots}
    </Container>
  );
};

export default index;