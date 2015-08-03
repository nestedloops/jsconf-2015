const filterScheduled = (clip) => { return clip.isScheduled(); };
const filterStopped = (clip) => { return clip.isStopped(); };

class Scheduler {
  constructor (clips = []) {
    this.clips = clips;
    this.schedule = this.schedule.bind(this);
  }

  schedule () {
    const clipstToStart = this.clips.filter(filterScheduled);
    clipstToStart.forEach((clip) => { clip.start(); });

    const clipstToStop = this.clips.filter(filterStopped);
    clipstToStop.forEach((clip) => { clip.stop(); });
  }
}

module.exports = Scheduler;
