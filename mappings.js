// const Clip = require('./clip');
const KillClip = require('./killclip');
const StopClip = require('./stopclip');
const ImmediateClip = require('./immediateclip');
const VideoNode = require('./playablevideonode');

module.exports = {
	// Row 1
	0: new VideoNode('videos/husain1.mp4'),
  1: new VideoNode('videos/husain2.mp4'),
  2: new VideoNode('videos/husain3.mp4'),
  3: new VideoNode('videos/taylor1.mp4'),
  4: new VideoNode('videos/taylor2.mp4'),
  5: new VideoNode('videos/williams1.mp4'),
  6: new VideoNode('videos/williams2.mp4'),
  7: new VideoNode('videos/williams3.mp4'),
	// Row 2
	16: new VideoNode('videos/crockford1.mp4'),
	17: new VideoNode('videos/crockford2.mp4'),
	18: new VideoNode('videos/crockford3.mp4'),
	19: new VideoNode('videos/crockford4.mp4'),
	20: new VideoNode('videos/crockford5.mp4'),
	21: new VideoNode('videos/crockford6.mp4'),
	22: new VideoNode('videos/abramov1.mp4'),
	23: new VideoNode('videos/abramov2.mp4'),
	// Row 3
	32: new VideoNode('videos/nolan1.mp4'),
	33: new VideoNode('videos/nolan2.mp4'),
	34: new VideoNode('videos/schiffer.mp4'),
	35: new VideoNode('videos/roberts.mp4'),
	36: new VideoNode('videos/rockbot1.mp4'),
	37: new VideoNode('videos/rockbot2.mp4'),
	38: new VideoNode('videos/rockbot3.mp4'),
	39: new VideoNode('videos/halliday.mp4'),
	// Row 4
	48: new VideoNode('videos/crockford7.mp4'),
	49: new VideoNode('videos/crockford8.mp4'),
	50: new VideoNode('videos/crockford9.mp4'),
	51: new VideoNode('videos/crockford10.mp4'),
	52: new VideoNode('videos/crockford11.mp4'),
	53: new VideoNode('videos/crockford12.mp4'),
	// Row 5
	64: new VideoNode('videos/reactconf1.mp4'),
	65: new VideoNode('videos/reactconf2.mp4'),
	66: new VideoNode('videos/reactconf3.mp4'),
	67: new VideoNode('videos/emberconf1.mp4'),
	68: new VideoNode('videos/emberconf2.mp4'),
	69: new VideoNode('videos/emberconf3.mp4'),
	70: new VideoNode('videos/emberconf4.mp4'),
	71: new VideoNode('videos/emberconf5.mp4'),

  // 0: new ImmediateClip({location: 'samples/quotes/EmberConf2015-Opening-Keynote-27m00s-es6.wav'}),
  // 1: new ImmediateClip({location: 'samples/quotes/EmberConf2015-Opening-Keynote-50m45s-virtualdomisreallyfast.wav'}),
  // 2: new ImmediateClip({location: 'samples/quotes/EmberConf2015-OpeningKeynote-27m10s-es2015.wav'}),
  // 3: new ImmediateClip({location: 'samples/quotes/EmberConf2015-OpeningKeynote-27m18s-es2016.wav'}),
  // 4: new ImmediateClip({location: 'samples/quotes/EmberConf2015-OpeningKeynote-47m32s-performanceisafeature.wav'}),
  // 5: new ImmediateClip({location: 'samples/quotes/EmberConf2015-OpeningKeynote-50m44s-virtualdom.wav'}),
  // 6: new ImmediateClip({location: 'samples/quotes/JamesHalliday-LXJS2013-0m35s-wanttomakethebrowsernice.wav'}),
  // 16: new ImmediateClip({location: 'samples/150809leon4js.mp3', gain: 1, isUntouchable: true}),
  // 17: new ImmediateClip({location: 'samples/quotes/crockford-upgradingtheweb-0m24s-theresnothing.wav'}),
  // 18: new ImmediateClip({location: 'samples/quotes/crockford-upgradingtheweb-1m24s-iwillfixtheweb.wav'}),
  // 19: new ImmediateClip({location: 'samples/quotes/crockford-upgradingtheweb-18m22s-iwanttogetridofjs.wav'}),
  117: new ImmediateClip({location: 'samples/150809leon4js.mp3', gain: 1, isUntouchable: true}),
  118: new StopClip({}),
  119: new KillClip({})
  // 16: new Clip({location: '/samples/beatbox-100bpm-4bars.wav', bars: 4}),
  // 32: new Clip({location: '/samples/loop-100bpm-2bars.wav', bars: 2}),
  // 32: new VideoNode('videos/phillip-roberts-event-loop-1_28-1_37-js-what-are-you.mp4'),
  // 33: new VideoNode('videos/jenn-schiffer-bresenham-06_29-06_35-js-is-pseudocode.mp4'),
  // 34: new VideoNode('videos/reactconf-immutablejs-30_28-30_40-no-more-mutable-state-stockholm.mp4'),
  // 35: new VideoNode('videos/reactconf-immutablejs-14_09-12_18-why-should-we-care.mp4'),
  // 36: new VideoNode('videos/jafar-husain-async-programming-0_49-0_59-we-decided-to-change-2.mp4'),
  // 37: new VideoNode('videos/jafar-husain-async-programming-25_51-26_00-but-there-is-a-problem.mp4'),
  // 38: new VideoNode('videos/david-nolen-immutable-08_30-08_36-as-js-dev-you-destroy.mp4'),
  // 48: new VideoNode('videos/ashley-williams-if-you-wish-15_11-15_26-class-definition-we-might-not-need.mp4'),
  // 49: new VideoNode('videos/ashley-williams-if-you-wish-17_43-17_55-what-even-is-a-class.mp4'),
  // 50: new VideoNode('videos/raquel-velez-evolution-of-a-programmer-14_27-14_50-these-people.mp4'),
  // 51: new VideoNode('videos/raquel-velez-evolution-of-a-programmer-24_10-24_42-we-are-in-this-together.mp4'),
  // 52: new VideoNode('videos/amy-lynn-taylor-remote-20_10-20_12-use-emoji.mp4'),
  // 53: new VideoNode('videos/amy-lynn-taylor-remote-20_29-20_36-express-gratitude.mp4'),
  // 54: new VideoNode('videos/ddd.mov')
};
