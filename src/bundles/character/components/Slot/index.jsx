import React from 'react';
import styled, { css } from 'styled-components';
import { colors, fonts, borders } from 'src/styles'

const Slot = styled.div`
  height: 15vw;
  width: 15vw;
  border: 2px solid  ${colors.four};
  border-radius: ${borders.radius.regular};
  margin: 2vw;
  background-image: url(${props => props.currentGear.image});
  background-size: contain;
  border-radius: 3vw;
  background-color: ${colors.white};
`;

const getEquiped = (type, character) => {
  //get current gear
  return {image: '/images/armor.png'};
}
const index = (props) => {
  const currentGear = getEquiped(props.type, props.character);
  const gearSelect = () => {
    console.log("selecting gear for" + props.type);
  }
  return (
    <Slot onClick={gearSelect} currentGear={currentGear}>
    </Slot>
  );
};

export default index;