const CLIP_STATES = {
  IDLE: 'idle',
  SCHEDULED: 'scheduled',
  PLAYING: 'playing',
  STOPPED: 'stopped'
};
const PlayableNode = require('./playablenode');

class Clip {
  constructor (location) {
    this.state = CLIP_STATES.IDLE;
    this.playableNode = new PlayableNode(location);
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
    if (this.state === CLIP_STATES.PLAYING) { return; }
    this.state = CLIP_STATES.PLAYING;
    this.playableNode.start();
  }

  stop () {
    this.state = CLIP_STATES.IDLE;
    this.playableNode.stop();
  }

  load () {
    return this.playableNode.load();
  }

  isScheduled () {
    return this.state === CLIP_STATES.SCHEDULED;
  }

  isStopped () {
    return this.state === CLIP_STATES.STOPPED;
  }

  isIdle () {
    return this.state === CLIP_STATES.IDLE;
  }

  isPlaying () {
    return this.state === CLIP_STATES.PLAYING;
  }
}

module.exports = Clip;
