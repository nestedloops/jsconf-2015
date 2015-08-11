const {Promise} = require('es6-promise');
const video = require('./video');

class PlayableNode {
  constructor (location) {
    this.location = location;
  }

  load () {
    return new Promise((resolve) => {
      const v = document.createElement('video');
      v.src = this.location;
      v.addEventListener('loadeddata', resolve);
    });
  }

  touch () {
    this.start();
  }

  start () {
    video.pause();
    video.src = this.location;
    video.play();
  }

  stop () {

  }

  isScheduled () {
    return false;
  }

  isStopped () {
    return false;
  }

  isIdle () {
    return false;
  }

  isPlaying () {
    return false;
  }
}

module.exports = PlayableNode;
