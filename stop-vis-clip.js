const Clip = require('./clip');
const canvas = document.getElementById('visualisation');

class StopVisClip extends Clip {
  constructor() {
    super();
    this.isVisible = true;
  }

  touch () {
    this.isVisible = !this.isVisible;

    if (this.isVisible) {
      canvas.style.opacity = 1;
    } else {
      canvas.style.opacity = 0;
    }
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
    return this.isVisible;
  }

}

module.exports = StopVisClip;
