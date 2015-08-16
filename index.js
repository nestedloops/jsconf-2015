const BeatClock = require('./beatclock');
const Scheduler = require('./scheduler');
const controller = require('./controller');
const mappings = require('./mappings');
const {Promise} = require('es6-promise');
const allClips = [];
Object.keys(mappings).forEach((key) => {
  let clip = mappings[key];
  if (clip.options.location) {
    allClips.push(mappings[key]);
  }
});

const loadAllClips = allClips.map((clip) => { return clip.load(); });

Promise.all(loadAllClips).then(() => {
  const clock = new BeatClock();
  const scheduler = new Scheduler(allClips);

  clock.on('bar', scheduler.schedule);
  clock.on('tick', controller.update);

  controller.init();
  clock.start();
});

// const video = require('./video');
// const webgl = require('./webgl');
// const gl = webgl.context();
//
// const tex = gl.createTexture();
// gl.bindTexture(gl.TEXTURE_2D, tex);
// gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T,     gl.CLAMP_TO_EDGE);
// gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S,     gl.CLAMP_TO_EDGE);
// gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
// gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
//
// const ix = gl.createBuffer();
// gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ix);
// gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0,1,2, 0,2,3]), gl.STATIC_DRAW);
//
// const draw = () => {
//   gl.clear(gl.COLOR_BUFFER_BIT);
//   gl.activeTexture(gl.TEXTURE0);
// 	gl.bindTexture(gl.TEXTURE_2D, tex);
//   gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, video);
//   gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ix);
//   gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
//   requestAnimationFrame(draw);
// };
// requestAnimationFrame(draw);
