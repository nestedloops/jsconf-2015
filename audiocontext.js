const AudioContext = global.AudioContext || global.webkitAudioContext || global.mozAudioContext;
const context = new AudioContext();

module.exports = context;
