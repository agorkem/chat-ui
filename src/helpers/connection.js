import io from 'socket.io-client';
import 'datachannel';

const connection = new DataChannel(); // eslint-disable-line no-undef

const onMessageCallbacks = {};
const socketio = io.connect('http://localhost:3000/');

socketio.on('message', (data) => {
  if (data.sender === connection.userid) return;

  if (onMessageCallbacks[data.channel]) {
    onMessageCallbacks[data.channel](data.message);
  }
});

connection.openSignalingChannel = function openSignalingChannel(config) {
  const channel = config.channel || this.channel;
  onMessageCallbacks[channel] = config.onmessage;

  if (config.onopen) setTimeout(config.onopen, 1000);
  return {
    send(message) {
      socketio.emit('message', {
        sender: connection.userid,
        channel,
        message,
      });
    },
    channel,
  };
};

export function createChannel(channelName) {
  return new Promise(() => {
    connection.open(channelName);
    // connection.connect(channelName);
    // connection.onopen(resolve);
    // connection.onerror(reject);
  });
}
