const context = require('./audiocontext');
const master = context.createGain();
const sidechain = context.createGain();
const analyser = context.createAnalyser();
analyser.smoothingTimeConstant = 0.3;
analyser.fftSize = 1024;

master.connect(analyser);
analyser.connect(context.destination);

sidechain.connect(context.destination);

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
  }
};

module.exports.release = () => {
  if (untouchableSource) {
    untouchableSource.out.disconnect();
    untouchableSource.out.connect(master);
  }
};
