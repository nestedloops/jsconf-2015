const context = require('./audiocontext');
const Dilla = require('dilla');
const EventEmitter = require('events').EventEmitter;

class BeatClock extends EventEmitter {
  constructor () {
    super();

    this.dilla = Dilla(context, {
      tempo: 100,
      beatsPerBar: 4,
      loopLength: 2
    });

    this._onTick = this._onTick.bind(this);

    this.dilla.on('tick', this._onTick);
  }

  start () {
    this.dilla.start();
  }

  stop () {
    this.dilla.stop();
  }

  setPosition (position) {
    this.dilla.setPosition(position);
  }

  _onTick (_tick) {
    const split = _tick.position.split('.');
    const tick = parseInt(split[2]);
    const beat = parseInt(split[1]);
    const bar = parseInt(split[0]);
    if (this.lastBar !== bar) {
      this.emit('bar', bar);
    }
    this.lastBar = bar;

    if (this.lastBeat !== beat) {
      this.emit('beat', beat, bar);
    }
    this.lastBeat = beat;

    if (this.lastTick !== tick) {
      this.emit('tick', tick, beat);
    }
    this.lastTick = tick;
  }
}

module.exports = BeatClock;
