// const Clip = require('./clip');
const KillClip = require('./killclip');
const StopClip = require('./stopclip');
const StopVisClip = require('./stop-vis-clip');
const MakeColorsClip = require('./make-colors-clip');
const MakeBigClip = require('./make-big-clip');
const ImmediateClip = require('./immediateclip');
const VideoNode = require('./playablevideonode');
const PosterClip = require('./poster-clip');

module.exports = {
  // ROW 1
  // Intro
  0: new VideoNode('videos/720p/roberts.m4v'),
  1: new VideoNode('videos/720p/williams3.m4v'),
  2: new VideoNode('videos/720p/reactconf1.m4v'),
  // Chorus
  3: new VideoNode('videos/720p/rockbot3.m4v'),
  4: new VideoNode('videos/720p/schiffer.m4v'),
  5: new VideoNode('videos/720p/emberconf4.m4v'),
  6: new VideoNode('videos/720p/emberconf5.m4v'),

  // ROW 2
  // Verse 1
  16: new VideoNode('videos/720p/husain2.m4v'),
  17: new VideoNode('videos/720p/emberconf2a.mp4'),
  18: new VideoNode('videos/720p/emberconf2b.mp4'),
  19: new VideoNode('videos/720p/husain1.m4v'),
  20: new VideoNode('videos/720p/williams2.m4v'),
  21: new VideoNode('videos/720p/crockford9.m4v'),
  22: new VideoNode('videos/720p/crockford8.m4v'),
  23: new VideoNode('videos/720p/crockford1.m4v'),

  // ROW 3
  32: new VideoNode('videos/720p/crockford2.m4v'),
  33: new VideoNode('videos/720p/crockford3.m4v'),
  34: new VideoNode('videos/720p/reactconf3.m4v'),
  35: new VideoNode('videos/720p/halliday.m4v'),
  36: new VideoNode('videos/720p/nolan1.m4v'),
  37: new VideoNode('videos/720p/nolan2.m4v'),
  38: new VideoNode('videos/720p/abramov1.m4v'),
  39: new VideoNode('videos/720p/abramov2.m4v'),

  // ROW 4
  48: new VideoNode('videos/720p/crockford12.m4v'),
  49: new VideoNode('videos/720p/rockbot1.m4v'),
  50: new VideoNode('videos/720p/rockbot2.m4v'),
  51: new VideoNode('videos/720p/taylor1.m4v'),
  52: new VideoNode('videos/720p/taylor2.m4v'),
  53: new VideoNode('videos/720p/crockford4.m4v'),
  54: new VideoNode('videos/720p/crockford5.m4v'),
  55: new VideoNode('videos/720p/crockford6.m4v'),

  // ROW 5
  64: new VideoNode('videos/720p/husain3.m4v'),
  65: new VideoNode('videos/720p/williams1.m4v'),
  66: new VideoNode('videos/720p/crockford4.m4v'),
  67: new VideoNode('videos/720p/crockford5.m4v'),
  68: new VideoNode('videos/720p/crockford6.m4v'),
  69: new VideoNode('videos/720p/crockford7.m4v'),
  70: new VideoNode('videos/720p/crockford10.m4v'),
  71: new VideoNode('videos/720p/crockford11.m4v'),

  // ROW 6
  80: new VideoNode('videos/720p/reactconf2.m4v'),
  81: new VideoNode('videos/720p/emberconf1.m4v'),
  82: new VideoNode('videos/720p/emberconf3.m4v'),
  83: new VideoNode('videos/kahlil.mp4'),

  // ROW 7
  96: new VideoNode('videos/720p/rockbot3.m4v'),
  97: new VideoNode('videos/720p/reactconf1.m4v'),
  98: new VideoNode('videos/720p/williams3.m4v'),
  99: new VideoNode('videos/720p/crockford1.m4v'),
  100: new VideoNode('videos/720p/crockford2.m4v'),
  101: new VideoNode('videos/720p/crockford3.m4v'),
  102: new VideoNode('videos/720p/rockbot2.m4v'),
  103: new VideoNode('videos/720p/rockbot1.m4v'),

  // ROW 8
  112: new StopVisClip(),
  113: new MakeColorsClip(),
  114: new MakeBigClip(),
  115: new PosterClip(),

	// Leon
  117: new ImmediateClip({location: 'samples/150917-leon4js-backgroundvocals.mp3', gain: 1, isUntouchable: true}),
	// Kill buttons
  118: new StopClip({}),
  119: new KillClip({})
};
