const BeatClock = require('./beatclock');

const filterScheduled = (clip) => { return clip.isScheduled(); };
const filterStopped = (clip) => { return clip.isStopped(); };

class Scheduler {
  constructor (clips = []) {
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
    console.log('bar');
    const clipstToStart = this.clips.filter(filterScheduled);
    clipstToStart.forEach((clip) => { clip.start(); });

    const clipstToStop = this.clips.filter(filterStopped);
    clipstToStop.forEach((clip) => { clip.stop(); });
  }
}

module.exports = Scheduler;
