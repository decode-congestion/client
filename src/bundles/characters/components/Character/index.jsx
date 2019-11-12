import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import CharacterSprite from 'src/bundles/common/components/CharacterSprite';
import styled, { css } from 'styled-components';
import { colors, fonts, borders } from 'src/styles'

const Show = styled.div`
  position: relative;
  width: 90vw;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  border-radius: 8vw;
  margin: 2vw;
  height: 20vh;
  background-color: ${colors.white};
`;

const Char = styled.div`
  background-color: ${props => props.color};
  width: 30vw;
  p {
    background-color: ${colors.white};
    border-radius: 0 2vw 2vw 0vw;
    padding: 1vw;
    width: 50%;
    margin-top: 1vw;
    margin-bottom: -5vw;
    text-align: center;
    font-weight: bold;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  p {
    margin: 3vw;
  }
`;
const Button = styled.button`
  position: absolute;
  bottom: 3vw;
  right: 0vw;
  color: white;
  background-color: transparent;
  border-radius: 50%;
  border: 2px solid ${props => props.selected? `#e74c3c` : `#77dd77`};
  background-color: ${props => props.selected? `#e74c3c` : `#77dd77`};
  height: 12vw;
  width: 12vw;
`;

const index = (props) => {
  const select = () => {
    if(props.selected){
      props.remove(props.character);
    }else{
      props.add(props.character);
    }

  }
  const bonus = () =>{
    let bonus = 0;
    for(const [key, value] of Object.entries(props.character)){
      if(value && value.bonus){
        bonus++;
      }
    }
    return bonus;
  }
  return (
    <Show>
        <Char color={props.color}>
          <p>{props.character.name}</p>
          <Link to={`/character/${props.character.id}`}> <CharacterSprite left="20" zoom="50" character={props.character}></CharacterSprite></Link>
        </Char>
      <Info>
        <p>Bonus: {bonus()} +</p>
        <p>Wins: 10</p>
        <p>Fans: 8</p>
        <Button onClick={select} selected={props.selected}>X</Button>
      </Info>
    </Show>
  );
};

export default index;