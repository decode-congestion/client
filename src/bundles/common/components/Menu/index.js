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

const Button =  styled.div`
  position: fixed;
  border: 2px solid ${colors.five};
  backdrop-filter: blur(10px);
  border-radius: 50%;
  width: 20vw;
  height: 20vw;
  bottom: 2vw;
  right: 2vw;
`;

const Image = styled.img`
  width: 140%;
  margin-left: -20%;
  margin-top: -20%;
  height: 140%;
`;

const Item = styled.div`
  width: 30vw;
  height: 30vw;
  margin: 2vw;
  border-radius: 50%;
  backdrop-filter: blur(5px);
  border: 2px solid ${props => colors[props.color]};
  margin-left: ${props => props.active? '0' : '20vw'};
  transition: all ${props => props.time}ms ease-in-out;
`;

const Menu = () => {
  const [active, setActive] = useState('');
  return (
    <div>
      <Menucontainer active={active}>
        <Link to="/characters" ><Item color="two" time="300" active={active}/></Link>
        <Link to="/character/2"><Item color="three" time="800" active={active}/></Link>
        <Link to="/gear"><Item color="four" time="600" active={active}/></Link>
      </Menucontainer>
      <Button onClick={()=>{active? setActive(false) : setActive(true)}}><Image src={require('src/assets/images/menu.gif')}></Image></Button>
    </div>
  );
};

export default Menu;