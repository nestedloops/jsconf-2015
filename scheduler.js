const BeatClock = require('./beatclock');
const {EventEmitter} = require('events');
const filterScheduled = (clip) => { return clip.isScheduled(); };
const filterStopped = (clip) => { return clip.isStopped(); };

class Scheduler extends EventEmitter {
  constructor (clips = []) {
    super();
    this.clips = clips;
    this.clock = new BeatClock();
    this.schedule = this.schedule.bind(this);
  }

  start () {
    this.bindToClockEvents();
    this.clock.start();
  }

  bindToClockEvents () {
    this.clock.on('bar', this.schedule);
  }

  schedule () {
    const clipstToStart = this.clips.filter(filterScheduled);
    clipstToStart.forEach((clip) => { clip.start(); });

    const clipstToStop = this.clips.filter(filterStopped);
    clipstToStop.forEach((clip) => { clip.stop(); });

    this.emit('bar');
  }
}

module.exports = Scheduler;
