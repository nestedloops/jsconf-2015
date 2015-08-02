const EventEmitter = require('events').EventEmitter;

const COLOR_CODES = {
  OFF: 12,
  RED: 15,
  AMBER: 63,
  YELLOW: 62,
  GREEN: 60
};

const midi = require('web-midi');
midi.getPortNames((err, names) => {
  console.log('sdf', err, names);
  if(names.length === 0) return;
  const l = global.l = midi(names[0]);
  l.write([144, 0, COLOR_CODES.RED]);
});

class Controller extends EventEmitter {

}

module.exports = Controller;
