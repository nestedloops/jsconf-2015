// const Clip = require('./clip');
const KillClip = require('./killclip');
const StopClip = require('./stopclip');
const ImmediateClip = require('./immediateclip');
const VideoNode = require('./playablevideonode');

module.exports = {
  // Row 1

  0: new VideoNode('videos/roberts.mp4'),
  1: new VideoNode('videos/schiffer.mp4'),
  2: new VideoNode('videos/crockford1.mp4'),
  3: new VideoNode('videos/crockford2.mp4'),
  4: new VideoNode('videos/crockford3.mp4'),
  5: new VideoNode('videos/crockford4.mp4'),
  6: new VideoNode('videos/crockford5.mp4'),
  7: new VideoNode('videos/crockford6.mp4'),

  16: new VideoNode('videos/husain1.mp4'),
  17: new VideoNode('videos/husain2.mp4'),
  18: new VideoNode('videos/husain3.mp4'),
  19: new VideoNode('videos/taylor1.mp4'),
  20: new VideoNode('videos/taylor2.mp4'),
  21: new VideoNode('videos/williams1.mp4'),
  22: new VideoNode('videos/williams2.mp4'),
  23: new VideoNode('videos/williams3.mp4'),

  32: new VideoNode('videos/crockford1.mp4'),
  33: new VideoNode('videos/crockford2.mp4'),
  34: new VideoNode('videos/crockford3.mp4'),
  35: new VideoNode('videos/crockford4.mp4'),
  36: new VideoNode('videos/crockford5.mp4'),
  37: new VideoNode('videos/crockford6.mp4'),
  38: new VideoNode('videos/abramov1.mp4'),
  39: new VideoNode('videos/abramov2.mp4'),

  48: new VideoNode('videos/crockford7.mp4'),
  49: new VideoNode('videos/crockford8.mp4'),
  50: new VideoNode('videos/crockford9.mp4'),
  51: new VideoNode('videos/crockford10.mp4'),
  52: new VideoNode('videos/crockford11.mp4'),
  53: new VideoNode('videos/crockford12.mp4'),

  64: new VideoNode('videos/reactconf1.mp4'),
  65: new VideoNode('videos/reactconf2.mp4'),
  66: new VideoNode('videos/reactconf3.mp4'),
  67: new VideoNode('videos/emberconf1.mp4'),
  68: new VideoNode('videos/emberconf2.mp4'),
  69: new VideoNode('videos/emberconf3.mp4'),
  70: new VideoNode('videos/emberconf4.mp4'),
  71: new VideoNode('videos/emberconf5.mp4'),

  80: new VideoNode('videos/nolan1.mp4'),
  81: new VideoNode('videos/nolan2.mp4'),
  82: new VideoNode('videos/halliday.mp4'),
  83: new VideoNode('videos/rockbot1.mp4'),
  84: new VideoNode('videos/rockbot2.mp4'),
  85: new VideoNode('videos/rockbot3.mp4'),
	// Leon
  117: new ImmediateClip({location: 'samples/150809leon4js.mp3', gain: 1, isUntouchable: true}),
	// Kill buttons
  118: new StopClip({}),
  119: new KillClip({})
};
