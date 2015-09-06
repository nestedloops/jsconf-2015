const Clip = require('./clip');
const vis = require('./visualisation');

class MakeColorsClip extends Clip {
  constructor() {
    super();
    this.isColorful = false;
  }

  touch () {
    this.isColorful = !this.isColorful;

    if (this.isColorful) {
      vis.makeColorful();
    } else {
      vis.makeJSConfColors();
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
    return this.isColorful;
  }

}

module.exports = MakeColorsClip;
