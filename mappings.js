const Clip = require('./clip');
const KillClip = require('./killclip');
const StopClip = require('./stopclip');
const ImmediateClip = require('./immediateclip');
const VideoNode = require('./playablevideonode');

module.exports = {
  0: new ImmediateClip({location: 'samples/quotes/EmberConf2015-Opening-Keynote-27m00s-es6.wav'}),
  1: new ImmediateClip({location: 'samples/quotes/EmberConf2015-Opening-Keynote-50m45s-virtualdomisreallyfast.wav'}),
  2: new ImmediateClip({location: 'samples/quotes/EmberConf2015-OpeningKeynote-27m10s-es2015.wav'}),
  3: new ImmediateClip({location: 'samples/quotes/EmberConf2015-OpeningKeynote-27m18s-es2016.wav'}),
  4: new ImmediateClip({location: 'samples/quotes/EmberConf2015-OpeningKeynote-47m32s-performanceisafeature.wav'}),
  5: new ImmediateClip({location: 'samples/quotes/EmberConf2015-OpeningKeynote-50m44s-virtualdom.wav'}),
  6: new ImmediateClip({location: 'samples/quotes/JamesHalliday-LXJS2013-0m35s-wanttomakethebrowsernice.wav'}),
  16: new ImmediateClip({location: 'samples/150809leon4js.mp3', gain: 1, isUntouchable: true}),
  17: new ImmediateClip({location: 'samples/quotes/crockford-upgradingtheweb-0m24s-theresnothing.wav'}),
  18: new ImmediateClip({location: 'samples/quotes/crockford-upgradingtheweb-1m24s-iwillfixtheweb.wav'}),
  19: new ImmediateClip({location: 'samples/quotes/crockford-upgradingtheweb-18m22s-iwanttogetridofjs.wav'}),
  118: new StopClip({}),
  119: new KillClip({}),
  // 16: new Clip({location: '/samples/beatbox-100bpm-4bars.wav', bars: 4}),
  // 32: new Clip({location: '/samples/loop-100bpm-2bars.wav', bars: 2}),
  32: new VideoNode('videos/phillip-roberts-event-loop-1_28-1_37-js-what-are-you.mp4'),
  33: new VideoNode('videos/jenn-schiffer-bresenham-06_29-06_35-js-is-pseudocode.mp4'),
  34: new VideoNode('videos/reactconf-immutablejs-30_28-30_40-no-more-mutable-state-stockholm.mp4'),
  35: new VideoNode('videos/reactconf-immutablejs-14_09-12_18-why-should-we-care.mp4'),
  36: new VideoNode('videos/jafar-husain-async-programming-0_49-0_59-we-decided-to-change.mp4'),
  37: new VideoNode('videos/jafar-husain-async-programming-23_51-26_00-but-there-is-a-problem.mp4'),
  38: new VideoNode('videos/david-nolen-immutable-08_30-08_36-as-js-dev-you-destroy.mp4'),

  48: new VideoNode('videos/ashley-williams-if-you-wish-15_11-15_26-class-definition-we-might-not-need.mp4'),
  49: new VideoNode('videos/ashley-williams-if-you-wish-17_43-17_55-what-even-is-a-class.mp4'),
  50: new VideoNode('videos/raquel-velez-evolution-of-a-programmer-14_27-14_50-these-people.mp4'),
  51: new VideoNode('videos/raquel-velez-evolution-of-a-programmer-24_10-24_42-we-are-in-this-together.mp4'),
  52: new VideoNode('videos/amy-lynn-taylor-remote-20_10-20_12-use-emoji.mp4'),
  53: new VideoNode('videos/amy-lynn-taylor-remote-20_29-20_36-express-gratitude.mp4'),
  54: new VideoNode('videos/ddd.mov')

};
