import Cookies from 'universal-cookie';
import io from 'socket.io-client';

const cookies = new Cookies();

class Socket {
  constructor() {
    console.log("APP START");
    this.bus = null;
    this.busStop = null;
  }
  login = (id) => {
    cookies.set('id', id);
    this.socket = io('http://localhost',  { query: `id=${cookies.id}` });
    this.socket.on ('shunt', function (namespace, object) {
      this.socketState = io(`http://localhost/${namespace}`);
      if(true){
        this.bus = 12;
      }else{
        this.busStop = 12;
      }
    });
    setInterval(this.update, 2000);
  }
  update = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((res) => {
        this.socket.emit ('update', {id: cookies.id, coords: res.coords});
      });
    }
  }
  subscribe = (respond) => {
    respond('joust', {name: 'Joust', varient: 'Peds'});
    this.socket.on ('joust', function (msg) {
      const notice = {name: 'Joust', varient: msg.type}
      respond('joust', notice);
    });
    this.socket.on ('game', function (msg) {
      const notice = {name: 'Poll', varient: msg.type}
      respond('game', notice);
    });
  }

  joust = (getCurrentPosition) => {
    const send = {damage: 1};
    this.socket.emit ('joust', send);
  }

  sendInfo = (data) => {
    const send = {type: 'peds', count: 1};
    this.socket.emit ('game', send);
  }

}

export default Socket;