import React, {useEffect} from 'react';
import styled, { css } from 'styled-components';
import { colors, fonts, borders } from 'src/styles'

const Container = styled.div`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${colors.one};
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  border-radius: 3vw;
`;
const Button =  styled.div`
  position: fixed;
  border: 2px solid ${colors.one};
  backdrop-filter: blur(10px);
  border-radius: 50%;
  width: 20vw;
  height: 20vw;
  bottom: 30vw;
  left: 50vw;
  transform: translate(-50%, 50%);
  animation-name: example;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  @keyframes example {
    0% {
      background-color: transparent;
      width: 20vw;
      height: 20vw;
    }
    50% {
      border-color: green;
      width: 25vw;
      height: 25vw;
    }
    100% {
      background-color: transparent;
      width: 20vw;
      height: 20vw;
    }
  }
`;

const Repeat = styled.div`
  background-image: url('Streetbackground.png');
`;

const index = (props) => {
  return (
    <Container> 
      <Repeat></Repeat>
      <Button></Button>
    </Container>
  );
};

export default index;