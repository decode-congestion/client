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
    this.socketState = null;
    this.socket.on ('shunt', (data) => {
      this.socketState = io(`http://6e8733a1.ngrok.io/${data.namespace}`);
      this.bus = data.busId;
      navigator.geolocation.getCurrentPosition((res) => {
        if(this.socketState){
          this.socketState.emit ('update', {id: cookies.get('id'), busId:  this.bus, coords: res.coords});
        }
        this.socket.emit ('update', {id: cookies.get('id'), busId: this.bus, coords: res.coords});
      });
    }
  }
  subscribe = (respond) => {
    const that = this;
    this.socket.on ('joust', () => {
      console.log("FOR SURE A JOUST");
      const notice = {name: 'Joust', type: 'Joust'}
      const accept = () => {that.socket.emit('accept_joust', {id: cookies.get('id'), busId: that.bus})};
      respond('joust', notice, accept);
    });
    this.socket.on ('end_joust', (msg) => {
      const notice = {name: 'end_joust', message: msg.message}
      respond('end_joust', notice);
    });
    this.socket.on ('game', (msg) => {
      const notice = {name: 'Poll', type: msg.type, varient: msg.type}
      const accept = () => {that.socket.emit('accept_game', {id: cookies.get('id'), busId: that.bus})};
      respond('game', notice, accept);
    });
  }

  joust = (getCurrentPosition) => {
    const that = this;
    const send = { busId: that.bus, id: cookies.get('id'), damage: 1};
    this.socket.emit ('joust', send);
  }

  sendInfo = (data) => {
    const that = this;
    const send = { busId: that.bus,  id: cookies.get('id'), type: data.type, count: data.count};
    this.socket.emit ('complete_game', send);
  }

}

export default Socket;