const Scheduler = require('./scheduler');
const Clip = require('./clip');
const c = global.c = new Clip('/samples/beat1-100bpm.wav');
require('./controller')
/*
c.load().then(() => {
  c.touch();
  const s = new Scheduler([c]);
  s.start();
});
*/
