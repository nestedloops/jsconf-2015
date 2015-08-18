const context = require('./audiocontext');
const master = require('./master');
const {Promise} = require('es6-promise');
const PlaybackManager = require('./playback');
const buffers = {};

class PlayableNode {
  constructor (options = {}) {
    this.options = options;
    this.location = options.location;
    this.loops = options.loops;
    this.isUntouchable = options.isUntouchable || false;
    this.buffer = null;
    this.bufferNode = null;
    this.out = context.createGain();
    this.out.connect(master);
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
    // check if it has a buffer, only play it when there is one
    if (!this.buffer && !buffers[this.options.location]) { return; }
    // stop all nodes before playing this one
    PlaybackManager.stopAllNodes();
    PlaybackManager.addNode(this);

    this.bufferNode = context.createBufferSource();
    this.bufferNode.buffer = this.buffer || buffers[this.location];
    if (this.loops) {
      this.bufferNode.loop = true;
    }
    this.bufferNode.connect(this.out);
    this.bufferNode.addEventListener('ended', this.stop.bind(this));
    this.out.gain.exponentialRampToValueAtTime(this.options.gain || 1, context.currentTime + .00001);
    this.bufferNode.start();
    master.isolateAnalyser(this);
    return this.bufferNode;
  }

  stop () {
    if (this.bufferNode) {
      this.bufferNode.stop();
      this.bufferNode.disconnect();
    }
    master.release();
    if (this.onstopped) this.onstopped();
    PlaybackManager.removeNode(this);
    return this.bufferNode;
  }
}

module.exports = PlayableNode;
