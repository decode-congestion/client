import React, {useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { colors, fonts, borders } from 'src/styles'
import AppContext from 'src/App/AppContext';

const Notificationscontainer = styled.div`
  position: fixed;
  z-index: 90;
  top: 0;
  backdrop-filter: blur(5px);
  height: 100vh;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: ${props => props.active? 'flex' : 'none'};
  transition: all 300ms ease-in-out;
`;

const Notification = styled.div`
  border-radius: 5vw;
  display: flex;
  justify-content: space-around;
  padding-top: 5vw;
  padding-bottom: 5vw;
  align-items: center;
  width: 85vw;
  background-color: ${colors.white};

`;
const Button = styled.div`
  display: inline-block;
  margin: 3vw;
  border-radius: 50%;
  width: 10vw;
  height: 10vw;
  border: 2px solid ${props=> props.cancel? `red` : `#77dd77`};
  color: ${props=> props.cancel? `red` : `#77dd77`};
  background-color: ${props=> props.cancel? `red` : `#77dd77`};
`

const Notifications = () => {
  const [active, setActive] = useState(false);
  const [notice, setNotice] = useState({});
  const App = useContext(AppContext);
  const subnotice = (type, res, accept) => {
    setActive(true);
    if(type==="end_joust"){
      setNotice({message: res.message});
    }else{
      setNotice({accept, type: type, name: res.name, varient: res.varient});
    }
  }
  const accept = () => {
    if(notice.accept){
      notice.accept();
    }
    setActive(false);
  }
  useEffect(()=>{
    App.login(1);
    App.subscribe(subnotice);
  },[])
  return (
    <div>
      <Notificationscontainer active={active}>
        {notice.message && <Notification><p> {notice.message}<span></span> </p><div><Link to={`/characters`}><Button onClick={()=>setActive(false)} /></Link><Button onClick={()=>setActive(false)} cancel={true}/></div></Notification>}
        { notice.message || <Notification><p>Upcomming {notice.name} Event <span>{notice.varient}</span> </p><div><Link to={`/${notice.type}${notice.varient? `/${notice.varient}`: ``}`}><Button onClick={accept}/></Link><Button onClick={()=>setActive(false)} cancel={true}/></div></Notification>}
      </Notificationscontainer>
    </div>
  );
};

export default Notifications;