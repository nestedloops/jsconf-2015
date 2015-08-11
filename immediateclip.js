const Clip = require('./clip');
const PlayableNode = require('./playablenode');
const States = Clip.States;

class ImmediateClip extends Clip {
  constructor (options) {
    super(options);
    this.snaps = false;
  }

  touch () {
    if (this.playableNode) {
      this.playableNode.stop();
    }
    this.playableNode = new PlayableNode(this.options);
    this.playableNode.start().onended = () => {
      this.state = States.IDLE;
    };
    this.state = States.PLAYING;
  }
}

module.exports = ImmediateClip;
