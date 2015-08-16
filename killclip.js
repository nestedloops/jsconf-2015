const Clip = require('./clip');
const States = Clip.States;
const PlaybackManager = require('./playback');

class ImmediateClip extends Clip {
  touch () {
    PlaybackManager.stopAllNodes();
  }

  isScheduled () {
    return false;
  }

  isStopped () {
    return true;
  }

  isIdle () {
    return false;
  }

  isPlaying () {
    return false;
  }

}

module.exports = ImmediateClip;
