# JavaScript, what are you?

An audio-visual performance written in Web Audio and Web MIDI by Boris Lechelt ([@bonotes](https://twitter.com/bonotes)), Kahlil Lechelt ([@kahliltweets](https://twitter.com/kahliltweets)) and Jan Monschke ([@thedeftone](https://twitter.com/thedeftone)) for [JSConf.eu 2015](http://2015.jsconf.eu/).

## How to play

Go to http://nestedloops.github.io/jsconf-2015/, plug in your Launchpad and jam :)

Also have a look at the code or only `mappings.js` to see which key maps to which functionality.

## How to navigate the code

_Disclaimer: As most of our side projects, this project suffered from last-minute code hacks, we apologize sincerely ;)_

Start in `index.js` which loads all video clips and then initializes the MIDI device. The MIDI device is accessed in `controller.js` and only supports Launchpad devices for now. Each clip is mapped to a specific key in `mappings.js`. Check that file to learn which key is triggering which video clip. Make sure to check out `videonode.js` to see how to load and play video files with zero latency. You will notice that there are some other clips in the mapping as well. Some can be used to influence the visualisation, some are used to stop playback and some influence the intro / outro.

## Credits

### Sampled People

All samples are taken from publicly available talks.

- Ashley Williams ([@ag_dubs](https://twitter.com/ag_dubs)) - [JSConf.us 2015 - If you wish to learn ES6/2015 from scratch, you must first invent the universe](https://www.youtube.com/watch?v=DN4yLZB1vUQ)
- Amy Lynn Tailor ([@amydearest](https://twitter.com/amydearest)): [CascadiaFest 2015 - Remote and better for it](https://www.youtube.com/watch?v=_NPLqrVMHFw)
- Dan Abramov ([@dan_abramov](https://twitter.com/dan_abramov)): [react-europe 2015 - Live React: Hot Reloading with Time Travel](https://www.youtube.com/watch?v=xsSnOQynTHs)
- David Nolen ([@swannodette](https://twitter.com/swannodette)): [JSConf.us 2014 - Immutability: Putting The Dream Machine To Work](https://www.youtube.com/watch?v=SiFwRtCnxv4)
- Douglas Crockford: [Nordic.js 2014 - The Better Parts](https://www.youtube.com/watch?v=PSGEjv3Tqo0) and [Angular U 2015 - Upgrading the Web](https://www.youtube.com/watch?v=6UTWAEJlhww)
- Jafar Husain ([@jhusain](https://twitter.com/jhusain)): [JSConf.us 2015 - Async Programming in ES7](https://www.youtube.com/watch?v=lil4YCCXRYc)
- James Halliday ([@substack](https://twitter.com/substack)): [LXJS 2013 - Modularidade para todos](https://www.youtube.com/watch?v=DCQNm6yiZh0)
- Jenn Schiffer ([@jennschiffer](https://twitter.com/jennschiffer)): [Code Genius 2015 - Drawing Lines with Bresenham's Line Algorithm](https://www.youtube.com/watch?v=zytBpLlSHms)
- Philip Roberts ([@philip_roberts](https://twitter.com/philip_roberts)): [JSConf.eu 2014 - What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- Raquel Vélez ([@rockbot](https://twitter.com/rockbot)): [JSConf.eu 2014 - Evolution of a developer](https://www.youtube.com/watch?v=rP1q6oIVco4)
- Tom Dale ([@tomdale](https://twitter.com/tomdale)): [EmberConf 2015 - Opening Keynote](https://www.youtube.com/watch?v=o12-90Dm-Qs)
- Yehuda Katz ([@wycats](https://twitter.com/wycats)): [EmberConf 2015 - Opening Keynote](https://www.youtube.com/watch?v=o12-90Dm-Qs)

### Creatives

- Boris Lechelt ([@bonotes](https://twitter.com/bonotes)) for producing the track and for creating the visuals
- Kahlil Lechelt ([@kahliltweets](https://twitter.com/kahliltweets)) for writing and performing the lyrics
- Tyler Benz for the original visualiser implementation (https://github.com/tybenz/visualizr)
