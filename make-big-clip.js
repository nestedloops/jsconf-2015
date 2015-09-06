const Clip = require('./clip');
const vis = require('./visualisation');

class MakeBigClip extends Clip {
  constructor() {
    super();
    this.isBig = false;
  }

  touch () {
    this.isBig = !this.isBig;

    if (this.isBig) {
      vis.makeBig();
    } else {
      vis.makeNormalSize();
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
    return this.isBig;
  }

}

module.exports = MakeBigClip;
