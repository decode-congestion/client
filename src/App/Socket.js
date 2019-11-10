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
    this.socket = io('http://localhost:3003');
    this.socketState = this.socket;
    this.socket.on ('shunt', (data) => {
      this.socketState = io(`http://localhost:3003/${data.namespace}`);
      this.bus = data.busId;
      this.socket.emit('join', {id: cookies.get('id'), busId: this.bus});
    });
    setInterval(this.update, 2000);
  }
  update = () => {
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition((res) => {
      console.log('asdasdas')
    this.socket.emit ('update', {id: cookies.id, busId: this.bus, coords: []});
    //   });
    // }
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
    const send = {id: cookies.get('id'), damage: 1};
    this.socket.emit ('joust', send);
  }

  sendInfo = (data) => {
    const send = {id: cookies.get('id'), type: data.type, count: data.count};
    this.socket.emit ('game', send);
  }

}

export default Socket;