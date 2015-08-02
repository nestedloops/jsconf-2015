const Scheduler = require('./scheduler');
const controller = require('./controller');
const mappings = require('./mappings');
const {Promise} = require('es6-promise');
const allClips = [];
Object.keys(mappings).forEach((key) => {
  allClips.push(mappings[key]);
});
const scheduler = new Scheduler(allClips);
const loadAllClips = allClips.map((clip) => { return clip.load(); });

Promise.all(loadAllClips).then(() => {
  controller.init();
  scheduler.start();
  scheduler.on('bar', controller.update);
});



/*
c.load().then(() => {
  c.touch();
  const s = new Scheduler([c]);
  s.start();
});
*/
