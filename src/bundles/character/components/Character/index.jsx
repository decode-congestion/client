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
const Character = styled.div`
  background-image: url(${props => props.characterSprite});
  background-size: contain;
  width: 100%;
  height: 45vh;
  image-rendering: optimizeSpeed;             /* STOP SMOOTHING, GIVE ME SPEED  */
  image-rendering: -moz-crisp-edges;          /* Firefox                        */
  image-rendering: -o-crisp-edges;            /* Opera                          */
  image-rendering: -webkit-optimize-contrast; /* Chrome (and eventually Safari) */
  image-rendering: pixelated; /* Chrome */
`;
const Armour = styled.div`
  color: green;
`

const Head = styled(Armour)`
  /* some non-Armour styles */
`
const Shoulders = styled(Armour)`
  /* some non-Armour styles */
`
const Chest = styled(Armour)`
  /* some non-Armour styles */
`
const Legs = styled(Armour)`
  /* some non-Armour styles */
`
const getCharacterSprite = () => {
  //get character sprite based on props
  return '/images/nima.png';
};

const index = (props) => {
  const characterSprite = getCharacterSprite(props.character);
  return (
    <Container> 
      <Character characterSprite={characterSprite}>
        <Head></Head>
        <Shoulders></Shoulders>
        <Chest></Chest>
        <Legs></Legs>
      </Character>
    </Container>
  );
};

export default index;