import React, {useEffect} from 'react';
import styled, { css } from 'styled-components';
import CharacterSprite from 'src/bundles/common/components/CharacterSprite';
import { colors, fonts, borders } from 'src/styles'

const Container = styled.div`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${colors.one};
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  border-radius: 3vw;
`;

const index = (props) => {
  return (
    <Container> 
      <CharacterSprite character={props.character}></CharacterSprite>
    </Container>
  );
};

export default index;