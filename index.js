const BeatClock = require('./beatclock');
const Scheduler = require('./scheduler');
const controller = require('./controller');
const mappings = require('./mappings');
const {Promise} = require('es6-promise');
const allClips = [];
Object.keys(mappings).forEach((key) => {
  allClips.push(mappings[key]);
});
const loadAllClips = allClips.map((clip) => { return clip.load(); });

Promise.all(loadAllClips).then(() => {
  const clock = new BeatClock();
  const scheduler = new Scheduler(allClips);

  clock.on('bar', scheduler.schedule);
  clock.on('tick', controller.update);

  controller.init();
  clock.start();
});



/*
c.load().then(() => {
  c.touch();
  const s = new Scheduler([c]);
  s.start();
});
*/
