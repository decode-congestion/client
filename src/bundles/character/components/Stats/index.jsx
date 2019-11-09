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
  background-color: rgba(256, 256, 256, 0.3);
`;

const index = () => {
  return (
    <Container>
      <Stat>34%</Stat>
      <Stat>34%</Stat>
      <Stat>34%</Stat>
      <Stat>34%</Stat>
    </Container>
  );
};

export default index;