import io from 'socket.io-client';

export default class SocketIO {
  constructor({ url }) {
    this.connection = io.connect(url);
  }

  on(ev, fn) {
    this.connection.on(ev, fn);
  }

  emit(...args) {
    this.connection.emit(...args);
  }

  getSessionId() {
    return this.connection.id;
  }

  disconnect() {
    return this.connection.disconnect();
  }
}
