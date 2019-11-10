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
    this.socketState = this.socket;
    this.socket.on ('shunt', function (data) {
      this.socketState = io(`http://localhost/${data.namespace}`);
      this.bus = data.busId;
      this.socket.emit('join', {busId: this.bus});
    });
    setInterval(this.update, 2000);
  }
  update = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((res) => {
        this.socketState.emit ('update', {id: cookies.id, busId: this.bus, coords: res.coords});
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
    const send = {type: data.type, count: data.count};
    this.socket.emit ('game', send);
  }

}

export default Socket;