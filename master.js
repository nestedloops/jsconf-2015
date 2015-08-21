const context = require('./audiocontext');
const master = context.createGain();
const sidechain = context.createGain();
const analyser = context.createAnalyser();
analyser.smoothingTimeConstant = 0.3;
analyser.fftSize = 1024;

master.gain.value = 1;
master.connect(analyser);
analyser.connect(context.destination);

sidechain.gain.value = 1;

module.exports = master;
module.exports.analyser = analyser;

let untouchableSource;
module.exports.isolateAnalyser = (node) => {
  if (node.isUntouchable) {
    untouchableSource = node;
  }
  node.out.connect(master.analyser);
  if (untouchableSource && untouchableSource !== node) {
    untouchableSource.out.disconnect();
    untouchableSource.out.connect(sidechain);
    sidechain.connect(context.destination);
  }
};

module.exports.release = () => {
  if (untouchableSource) {
    console.log('release');
    untouchableSource.out.disconnect();
    sidechain.disconnect();
    untouchableSource.out.connect(master);
  }
};
