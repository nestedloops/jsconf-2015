const context = require('./audiocontext');
const {Promise} = require('es6-promise');

class PlayableNode {
  constructor (location) {
    this.location = location;
    this.buffer = null;
    this.bufferNode = null;
    this.out = context.createGain();
    this.out.connect(context.destination);
  }

  load () {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'arraybuffer';
      xhr.onload = () => {
        context.decodeAudioData(xhr.response, resolve, reject);
      };
      xhr.open('GET', this.location, true);
      xhr.send();
    }).then((buffer) => {
      this.buffer = buffer;
      return buffer;
    });
  }

  start () {
    if (!this.buffer) { return; }
    this.bufferNode = context.createBufferSource();
    this.bufferNode.buffer = this.buffer;
    this.bufferNode.loop = true;
    this.bufferNode.connect(this.out);
    this.out.gain.exponentialRampToValueAtTime(1, context.currentTime + .00001);
    this.bufferNode.start();
  }

  stop () {
    this.out.gain.exponentialRampToValueAtTime(.01, context.currentTime + .2);
    setTimeout(() => {
      this.bufferNode.stop();
      this.bufferNode.disconnect();
      this.bufferNode = null;
    }, 1000);
  }
}

module.exports = PlayableNode;
