const context = require('./audiocontext');
const {Promise} = require('es6-promise');
const buffers = {};

class PlayableNode {
  constructor (options = {}) {
    this.options = options;
    this.location = options.location;
    this.loops = options.loops;
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
      buffers[this.location] = buffer;
      this.buffer = buffer;
      return buffer;
    });
  }

  start () {
    if (!this.buffer && !buffers[this.options.location]) { return; }
    this.bufferNode = context.createBufferSource();
    this.bufferNode.buffer = this.buffer || buffers[this.location];
    if (this.loops) {
      this.bufferNode.loop = true;
    }
    this.bufferNode.connect(this.out);
    this.out.gain.exponentialRampToValueAtTime(this.options.gain || 1, context.currentTime + .00001);
    this.bufferNode.start();
    return this.bufferNode;
  }

  stop () {
    this.out.gain.exponentialRampToValueAtTime(.01, context.currentTime + .2);
    return this.bufferNode;
  }
}

module.exports = PlayableNode;
