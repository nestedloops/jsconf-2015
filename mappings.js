const Clip = require('./clip');

module.exports = {
  0: new Clip({location: '/samples/beat1-100bpm-2bars.wav', bars: 2}),
  16: new Clip({location: '/samples/beatbox-100bpm-4bars.wav', bars: 4}),
  32: new Clip({location: '/samples/loop-100bpm-2bars.wav', bars: 2})
};
