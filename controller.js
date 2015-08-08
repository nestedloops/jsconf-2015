const COLOR_CODES = {
  OFF: 12,
  RED: 15,
  AMBER: 63,
  YELLOW: 62,
  GREEN: 60
};
const {mappings} = require('./mappings');
const midi = require('web-midi');
let midiController = null;

const setController = (err, names) => {
  if (names.length === 0 || err) return;
  midiController = global.midiController = midi(names[0]);
  observeController();
};

const observeController = () => {
  midiController.on('data', touchClip);
};

const touchClip = (data) => {
  const key = data[1];
  const down = data[2] > 0;
  const clip = mappings[key];
  if (down && clip) {
    clip.touch();
    setKeyColor(key, clipToKeyColor(clip));
  }
};

const clipToKeyColor = (clip) => {
  if (clip.isIdle()) {
    return COLOR_CODES.OFF;
  } else if (clip.isScheduled()) {
    return COLOR_CODES.YELLOW;
  } else if (clip.isPlaying()) {
    return COLOR_CODES.GREEN;
  } else if (clip.isStopped()) {
    return COLOR_CODES.RED;
  }
};

const mappingKeys = Object.keys(mappings);
const update = (tick, beat) => {
  // don't update if no midi controller present
  if (!midiController) { return; }
  updateProgress(tick, beat);
  mappingKeys.forEach((key) => {
    const clip = mappings[key];
    const color = clipToKeyColor(clip);
    setKeyColor(key, color);
  });
};

const setKeyColor = (key, color) => {
  midiController.write([144, key, color]);
};

const updateProgress = (tick, beat) => {
  const priorTicks = (beat - 1) * 96;
  const currentTicks = tick;
  const tickProgress = currentTicks + priorTicks;
  const totalTicks = 4 * 96;
  const ratio = tickProgress / totalTicks;

  const position = Math.floor(ratio * 8);
  for (let i = 1; i <= 8; i++) {
    setKeyColor((i * 16) - 8, i-1 === position ? COLOR_CODES.AMBER : COLOR_CODES.OFF);
  }
};

module.exports = {
  init () {
    midi.getPortNames(setController);
    midi.watchPortNames(setController);
  },

  update (tick, beat) {
    update(tick, beat);
  }
};
