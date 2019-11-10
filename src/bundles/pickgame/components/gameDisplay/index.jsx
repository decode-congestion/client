import React, {useEffect, useRef, useState, useContext} from 'react';
import styled, { css } from 'styled-components';
import { colors, fonts, borders } from 'src/styles';
import AppContext from 'src/App/AppContext';

const Container = styled.div`
  background: transparent;
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
      width: 20vw;
      height: 20vw;
    }
    50% {
      border-color: green;
      width: 25vw;
      height: 25vw;
    }
    100% {
      width: 20vw;
      height: 20vw;
    }
  }
  &:active{
    animation-play-state: pause;
    border-color: ${colors.five};
  }
`;

const Repeat = styled.div`
  position:absolute;
  background-image: ${props => props.version? `url('/images/Streetbackground.png')` : `url('/images/grass.png')`};
  background-size: ${props => props.version? `12%`: `40%`};

  width: 1810vw;
  background-repeat: repeat-x;
  left: 0;
  ${props => props.version?  `top: 0vh` : `top: 70vh`};
  height: 70vh;
  animation-name: scrollGood;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  @keyframes scrollGood {
    0% {
      transform: translate3d(0,0,0);
    }
    100% {
      transform: translate3d(-810px,0,0);
    }
  }
`;

const Overflow = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #d1ffdd;
`;

const Bus = styled.div`
  position: absolute;
  width: 44vw;
  background-size: cover;
  height: 20vw;
  z-index: 30;
  animation-name: bounce;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  @keyframes bounce {
    0% {
      margin-top: 0vw;
    }
    50% {
      margin-top: -2vw;
    }
    100% {
      margin-top: 0vw;
    }
  }
  background-image: url('/images/bus1.png');
  ${props => {
    if (props.right){
      return `
      top: 45%;
      right: 2%;
      transform: scaleX(-1);
      background-image: url('/images/bus2.png');
      `;
    } else {
      return `
      top: 55%;
      left: 2%;
      `;
    }
  }}
`;
const shared = `
position: absolute;
width: 20vw;
height: auto;
top: 0;
right: 0;
animation-name: fly;
animation-duration: 1.5s;
animation-fill-mode: forwards;
`
const Projectile = styled.img`
  ${shared}
  @keyframes fly {
    90% {
      top: -100vh;
      right: 100vh;
    }
    100%{
      top: -100vh;
      right: 100vh;
      visibility: hidden;
    }
  }
`;
const Projectile2 = styled.img`
  ${shared}
  animation-name: fly2;
  @keyframes fly2 {
    90% {
      top: -100vh;
      right: -100vh;
    }
    100%{
      top: -100vh;
      right: -100vh;
      visibility: hidden;
    }
  }
`;
const types = [
  <Projectile  src="/images/barrier.png"></Projectile>,
  <Projectile  src="/images/sign_blue.png"></Projectile>,
  <Projectile2  src="/images/sign_red.png"></Projectile2>,
  <Projectile2  src="/images/sign_street.png"></Projectile2>,
  <Projectile2  src="/images/barrier.png"></Projectile2>,
]

const JoustDisplay = (props) => {
  const App = useContext(AppContext);
  const [projectiles, setProjecticles] = useState(types);
  const joust = () => {
    const x = Math.floor(Math.random() * 5);
    App.joust();
    setProjecticles(types[x]);
  };
  return (
    <Overflow>
      <Repeat></Repeat>
      <Container> 
        <Button onClick={joust}></Button>
      </Container>
    </Overflow>
  );
};

export default JoustDisplay;