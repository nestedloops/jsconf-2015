const CLIP_STATES = {
  IDLE: 'idle',
  SCHEDULED: 'scheduled',
  PLAYING: 'playing',
  STOPPED: 'stopped'
};
const context = require('./audiocontext');
const {Promise} = require('es6-promise');

class Clip {
  constructor () {
    this.state = CLIP_STATES.IDLE;
    this.buffer;
  }

  touch () {
    switch (this.state) {
      case CLIP_STATES.IDLE:
        this.state = CLIP_STATES.SCHEDULED;
        break;
      case CLIP_STATES.PLAYING:
        this.state = CLIP_STATES.STOPPED;
        break;
    }
  }

  start () {
    if (this.state === CLIP_STATES.PLAYING || !this.buffer) { return; }
    this.state = CLIP_STATES.PLAYING;
    this.bufferNode = context.createBufferSource();
    this.bufferNode.buffer = this.buffer;
    this.bufferNode.loop = true;
    this.bufferNode.connect(context.destination);
    this.bufferNode.start();
  }

  stop () {
    if (!this.bufferNode) { return; }
    this.bufferNode.stop();
    this.bufferNode.disconnect();
    this.bufferNode = null;
    this.state = CLIP_STATES.IDLE;
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

  isScheduled () {
    return this.state === CLIP_STATES.SCHEDULED;
  }

  isStopped () {
    return this.state === CLIP_STATES.STOPPED;
  }
}

module.exports = Clip;
