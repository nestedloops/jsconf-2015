const Clip = require('./clip');
const PlaybackManager = require('./playback');

class StopClip extends Clip {
  touch () {
    PlaybackManager.stopAllNodes();
  }

  isScheduled () {
    return true;
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

module.exports = StopClip;
