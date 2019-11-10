import React from 'react';
import styled, { css } from 'styled-components';
import { colors, fonts, borders } from 'src/styles'

// sprite bonus patron
const armor ={
  helmet: (props) => {
    return `
    background-image: url('/images/helmet${props.value.sprite}.png');
    background-position-x: 50%;
    background-position-y: -20%;
    /* some non-Armour styles */
  `},
  chest: (props) => {
    return `
    background-image: url('/images/chest${props.value.sprite}.png');
    background-position-x: 50%;
    background-position-y: 20%;
    /* some non-Armour styles */
  `},
  legs: (props) => {
    return `
    background-image: url('/images/legs${props.value.sprite}.png');
    background-position-x: 50%;
    background-position-y: 60%;
    /* some non-Armour styles */
  `},
  feet: (props) => {
    return `
    background-image: url('/images/feet${props.value.sprite}.png');
    background-position-x: 50%;
    background-position-y: 100%;
    /* some non-Armour styles */
  `},
  sheild: (props) => {
    return `
    background-image: url('/images/sheild${props.value.sprite}.png');
    background-position-x: -15%;
    background-position-y: 40%;
    /* some non-Armour styles */
  `},
  gloves: (props) => {
    return `
    background-image: url('/images/gloves${props.value.sprite}.png');
    background-position-x: 50%;
    background-position-y: 40%;
    /* some non-Armour styles */
  `}
}
const Tooltip = styled.div`
  visibility: hidden;
  display: flex;
  z-index: 20;
  width: 30vw;
  left: -7vw;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 3vw;
  background-color: black;
  color: white;
  padding: 3vw;
  position: absolute;
  top: 15vw;
  span{
    color: ${colors.five};
  }
`;

const Slot = styled.div`
  position: relative;
  height: 15vw;
  width: 15vw;
  border: 2px solid  ${colors.four};
  border-radius: ${borders.radius.regular};
  margin: 2vw;
  background-size: 200%;
  border-radius: 3vw;
  background-color: ${colors.white};
  ${props => props.value && armor[props.type] && armor[props.type](props)}
  p{
    color: purple;
    margin: 0;
    text-align: right;
  }
  &:hover ${Tooltip} {
    visibility: visible;
  }
`;


const getEquiped = (type, character) => {
  //get current gear
  return {image: '/images/armor.png'};
}
const index = (props) => {
  const currentGear = getEquiped(props.type, props.character);
  const gearSelect = () => {
  }
  return (
    <Slot onClick={gearSelect} currentGear={currentGear} type={props.type} value={props.value}>
      <p>+50</p>
      <Tooltip><span>{props.value && props.value.name}</span>({props.value && props.value.patron})</Tooltip>
    </Slot>
  );
};

export default index;