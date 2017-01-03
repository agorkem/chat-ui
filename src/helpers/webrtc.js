export default class WebRTC {
  constructor() {
    this.config = {
      peerConnectionConfig: {
        iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
      },
      peerConnectionConstraints: {
        optional: [],
      },
      receiveMedia: {
        offerToReceiveAudio: 1,
        offerToReceiveVideo: 1,
      },
      enableDataChannels: true,
    };

    this.peers = [];
  }

  get peers() {
    return this.peers;
  }
}
