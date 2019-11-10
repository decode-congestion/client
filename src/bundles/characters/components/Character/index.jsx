import React, {useState} from 'react';
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
    margin-bottom: -5vw;
    text-align: center;
    font-weight: bold;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin: 1vw;
  }
`;
const Button = styled.button`
  position: absolute;
  bottom: 3vw;
  right: 3vw;
  background-color: transparent;
  border-radius: 50%;

  height: 15vw;
  width: 15vw;
  ${props => {
    return `
      border: 2px solid #77dd77;
    `
  }}
`;

const index = (props) => {
  const select = () => {

  }
  return (
    <Show>
      <Char color={props.color}>
        <p>{props.character.name}</p>
        <CharacterSprite left="20" zoom="50" character={props.character}></CharacterSprite>
      </Char>
      <Info>
        <p>stats</p>
        <p>active</p>
        <Button onClick={select} selected={props.selected}>X</Button>
      </Info>
    </Show>
  );
};

export default index;