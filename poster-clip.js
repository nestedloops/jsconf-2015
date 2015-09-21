const Clip = require('./clip');
const intro = document.getElementById('intro');

class PosterClip extends Clip {
  constructor() {
    super();
    this.isVisible = true;
  }

  touch () {
    this.isVisible = !this.isVisible;

    if (this.isVisible) {
      intro.style.opacity = 1;
    } else {
      intro.style.opacity = 0;
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

module.exports = PosterClip;
