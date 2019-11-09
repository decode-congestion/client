import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { colors, fonts, borders } from 'src/styles'

const Menucontainer = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  right: ${props => props.active? '0' : '-25vw'};
  transition: all 300ms ease-in-out;
`;

const index = () => {
  return (
    <div>
      <h1> hey</h1>
    </div>
  );
};

export default index;