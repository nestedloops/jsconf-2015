const Clip = require('./clip');
const outro = document.getElementById('outro');

class OutroClip extends Clip {
  constructor() {
    super();
    this.isVisible = false;
  }

  touch () {
    this.isVisible = !this.isVisible;

    if (this.isVisible) {
      outro.style.opacity = 1;
    } else {
      outro.style.opacity = 0;
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

module.exports = OutroClip;
