const context = require('./audiocontext');
const master = require('./master');
const PlaybackManager = require('./playback');
const {Promise} = require('es6-promise');
const video = require('./video');
const sourceNode = context.createMediaElementSource(video);

class PlayableNode {
  constructor (location) {
    this.location = location;
    this.out = context.createGain();
    this.out.connect(master);
  }

  load () {
    return new Promise((resolve) => {
      const v = document.createElement('video');
      v.src = this.location;
      // v.addEventListener('loadeddata', resolve);
      resolve();
    });
  }

  touch () {
    this.start();
  }

  start () {
    this.stop();
    video.pause();
    video.src = this.location;
    video.play();
    PlaybackManager.stopAllNodes();
    PlaybackManager.addNode(this);
    this.state = 'playing';
    video.addEventListener('ended', () => {
      this.stop();
    });
    sourceNode.connect(this.out);
    master.isolateAnalyser(this);
  }

  stop () {
    video.src = '';
    this.state = 'idle';
    master.release();
    PlaybackManager.removeNode(this);
    if (sourceNode) {
      sourceNode.disconnect();
    }
  }

  isScheduled () {
    return false;
  }

  isStopped () {
    return false;
  }

  isIdle () {
    return this.state === 'idle';
  }

  isPlaying () {
    return this.state === 'playing';
  }
}

module.exports = PlayableNode;
