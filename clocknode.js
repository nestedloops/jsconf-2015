const States = require('./clip').States;

class ClockNode {
  constructor () {
    this.state = States.IDLE;
  }

  setClock (clock) {
    this.clock = clock;
  }

  touch () {
    switch (this.state) {
      case States.IDLE:
        this.state = States.PLAYING;
        this.clock.setPosition('1.1.01');
        this.clock.start();
        break;
      case States.PLAYING:
        this.state = States.IDLE;
        this.clock.stop();
        break;
    }
  }

  isScheduled () {
    return false;
  }

  isStopped () {
    return false;
  }

  isIdle () {
    return this.state === States.IDLE;
  }

  isPlaying () {
    return this.state === States.PLAYING;
  }

}

module.exports = ClockNode;
