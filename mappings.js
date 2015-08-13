const Clip = require('./clip');
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
  16: new ImmediateClip({location: 'samples/150809leon4js.mp3', gain: 1}),
  17: new ImmediateClip({location: 'samples/quotes/crockford-upgradingtheweb-0m24s-theresnothing.wav'}),
  18: new ImmediateClip({location: 'samples/quotes/crockford-upgradingtheweb-1m24s-iwillfixtheweb.wav'}),
  19: new ImmediateClip({location: 'samples/quotes/crockford-upgradingtheweb-18m22s-iwanttogetridofjs.wav'})

  // 16: new Clip({location: '/samples/beatbox-100bpm-4bars.wav', bars: 4}),
  // 32: new Clip({location: '/samples/loop-100bpm-2bars.wav', bars: 2}),
  // 33: new VideoNode('videos/crockford.mp4'),
  // 34: new VideoNode('videos/crockford2.mp4')
};
