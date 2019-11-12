import React, {useEffect, useRef, useState, useContext} from 'react';
import styled, { css } from 'styled-components';
import { colors, fonts, borders } from 'src/styles';
import AppContext from 'src/App/AppContext';
import { useHistory } from "react-router-dom";

const Container = styled.div`
  background: transparent;
  position: absolute;
  width: 100vw;
  border-radius: 3vw;
  h1{
    width: 100%;
    font-size: 5rem;
    margin-top: 10vh;
    color: ${colors.white};
    text-align: center;
  }
  h2{
    width: 100%;
    font-size: 2rem;
    margin-top: 10vh;
    color: ${colors.white};
    text-align: center;
  }
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
  background-image: url('/images/characterbg.gif')};
  width: 100vw;
  height: 100vh;
  background-size: cover;
  left: 0;
`;

const Overflow = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #d1ffdd;
`;

const Counter = styled.div`
  z-index: 30;
  width: 100vw;
  padding-left: 80vw;
  margin-top: 40vw;
  height: 50vh;
  display:flex;
  flex-wrap: wrap;
`;

const Person = styled.div`
  width: 20vh;
  height: 20vh;
  margin: -20vw;
  background-image: url('/images/driver2.png');
  background-size: contain;
`;
const Bike = styled.div`
  width: 40vh;
  height: 40vh;
  margin: -40vw;
  background-image: url('/images/bike.png');
  background-size: contain;
`;
const Car = styled.div`
  width: 40vh;
  height: 40vh;
  margin: -40vw;
  background-image: url('/images/car.png');
  background-size: contain;
`;
const Submit =  styled.div`
  position: fixed;
  background-color: #77dd77;
  backdrop-filter: blur(10px);
  border-radius: 50%;
  width: 15vw;
  height: 15vw;
  bottom: 22.5vw;
  left: 20vw;
`;


const GameDisplay = (props) => {
  const [things, setThings] = useState([]);
  const App = useContext(AppContext);
  let history = useHistory();
  const submit = () => {
    App.sendInfo({type: props.match.params.mode, count: things.length});
    history.push("/gear");
  };
  const add = () => {
    if(props.match.params.mode === "people"){
      setThings([...things, <Person></Person>]);
    }else if(props.match.params.mode === "bikes"){
      setThings([...things, <Bike></Bike>]);
    }else {
      setThings([...things, <Car></Car>]);
    }
  }
  return (
    <Overflow>
      <Repeat></Repeat>
      <Container> 
        <h2>How many {props.match.params.mode} can you see on the street?</h2>
        <h1>{things.length}</h1>
        <Counter>
          {things}
        </Counter>
        <Button onClick={add}></Button>
        <Submit onClick={submit}></Submit>
      </Container>
    </Overflow>
  );
};

export default GameDisplay;