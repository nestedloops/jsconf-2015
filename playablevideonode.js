const context = require('./audiocontext');
const master = require('./master');
const PlaybackManager = require('./playback');
const {Promise} = require('es6-promise');
const videoContainer = document.getElementById('video-container');

let lastPlayingNode;

class PlayableNode {
  constructor (location) {
    this.location = location;
    this.out = context.createGain();
    this.out.connect(master);

    this.stop = this.stop.bind(this);
  }

  load () {
    return new Promise((resolve) => {
      const location = this.location;
      const v = document.createElement('video');
      v.preload = 'auto';
      this.videoNode = v;
      this.sourceNode = context.createMediaElementSource(this.videoNode);

      const xhr = new XMLHttpRequest();
      xhr.open('GET', this.location, true);
      xhr.responseType = 'arraybuffer';
      xhr.onload = (event) => {
        const blob = new Blob([event.target.response], {type: 'video/mp4'});
        v.src = URL.createObjectURL(blob);
        resolve();
      };

      xhr.onprogress = function(event){
        if(event.lengthComputable) {
          const percentage = (event.loaded / event.total) * 100;
          if (percentage >= 100) {
            console.log(location, percentage, '%');
          }
        }
      };
      xhr.send();
    });
  }

  touch () {
    this.start();
  }

  start () {
    if (lastPlayingNode) {
      lastPlayingNode.stop();
    }
    videoContainer.appendChild(this.videoNode);
    this.videoNode.pause();
    this.videoNode.play();
    PlaybackManager.stopAllNodes();
    PlaybackManager.addNode(this);
    this.state = 'playing';
    this.videoNode.addEventListener('ended', this.stop);
    this.sourceNode.connect(this.out);
    master.isolateAnalyser(this);
    lastPlayingNode = this;
  }

  stop () {
    try {
      videoContainer.removeChild(this.videoNode);
    } catch(e) {
      console.warn(e);
    }
    this.videoNode.removeEventListener('ended', this.stop);
    this.videoNode.currentTime = 0;
    this.videoNode.pause();
    this.state = 'idle';
    master.release();
    PlaybackManager.removeNode(this);
    if (this.sourceNode) {
      this.sourceNode.disconnect();
    }
  }

  isScheduled () {
    return false;
  }

  isStopped () {
    return false;
  }

  isIdle () {
    return this.state === 'idle';
  }

  isPlaying () {
    return this.state === 'playing';
  }
}

module.exports = PlayableNode;
