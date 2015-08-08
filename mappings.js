const Clip = require('./clip');
const ClockNode = require('./clocknode');

const mappings = module.exports.mappings = {
  0: new Clip({location: '/samples/beat1-100bpm-2bars.wav', bars: 2}),
  16: new Clip({location: '/samples/beatbox-100bpm-4bars.wav', bars: 4}),
  32: new Clip({location: '/samples/loop-100bpm-2bars.wav', bars: 2}),
  119: new ClockNode()
};

module.exports.init = (clock) => {
  mappings[119].setClock(clock);
};
