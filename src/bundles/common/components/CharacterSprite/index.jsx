import React, {useEffect} from 'react';
import styled, { css } from 'styled-components';
import { colors, fonts, borders } from 'src/styles'

const Character = styled.div`
  background-image: url(${props => props.characterSprite});
  background-size: contain;
  width: 45vh;
  zoom: ${props => props.zoom+'%'};
  margin-left: ${props => `-${props.left}%`};
  height: 45vh;
  image-rendering: optimizeSpeed;             /* STOP SMOOTHING, GIVE ME SPEED  */
  image-rendering: -moz-crisp-edges;          /* Firefox                        */
  image-rendering: -o-crisp-edges;            /* Opera                          */
  image-rendering: -webkit-optimize-contrast; /* Chrome (and eventually Safari) */
  image-rendering: pixelated; /* Chrome */
`;
const Armour = styled.div`
  position: absolute;
  background-size: contain;
  width: 45vh;
  height: 45vh;
  background-image: ${props => `url('${props.sprite}')`};
`

const Head = styled(Armour)`
 
  /* some non-Armour styles */
`
const Chest = styled(Armour)`
 
  /* some non-Armour styles */
`
const Legs = styled(Armour)`
 
  /* some non-Armour styles */
`
const Feet = styled(Armour)`
 
  /* some non-Armour styles */
`
const Sheild = styled(Armour)`
 
  /* some non-Armour styles */
`
const Gloves = styled(Armour)`
 
  /* some non-Armour styles */
`

const index = (props) => {
  return (
      <Character zoom={props.zoom} left={props.left} characterSprite={`/images/driver${props.character.id%3}.png`}>
        {props.character.helmet && (
          <React.Fragment>
            <Head zoom={props.zoom} left={props.left} sprite={`/images/helmet${props.character.helmet.sprite%3}.png`}></Head>
            <Chest zoom={props.zoom} left={props.left} sprite={`/images/chest${props.character.chest.sprite%3}.png`}></Chest>
            <Gloves zoom={props.zoom} left={props.left} sprite={`/images/gloves${props.character.gloves.sprite%3}.png`}></Gloves>
            <Legs zoom={props.zoom} left={props.left} sprite={`/images/legs${props.character.legs.sprite%3}.png`}></Legs>
            <Feet zoom={props.zoom} left={props.left} sprite={`/images/feet${props.character.feet.sprite%3}.png`}></Feet>
            <Sheild zoom={props.zoom} left={props.left} sprite={`/images/sheild${props.character.sheild.sprite%3}.png`}></Sheild>
          </React.Fragment>
        )}
      </Character>
  );
};

export default index;