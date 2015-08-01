const Scheduler = require('./scheduler');

const s = new Scheduler();
s.on('bar', (bar) => { console.log('bar', bar);})
s.start();
