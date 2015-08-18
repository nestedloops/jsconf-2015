const analyser = require('./master').analyser;
const canvas = document.getElementById('visualisation');
const ctx = canvas.getContext('2d');

let bars = Array(300);
let barCount = 60;
let forward = true;
let lineWidth = 15;
let lineGap = 18;
let heightFactor = 2;
let delay = 10;
let animate = 'auto';
let animateSwitch = 1000;
let hue = 300;
let width, height;

const render = () => {
  var array = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(array);
  var average = getAverageVolume(array);
  average *= heightFactor;

  bars[0] = average;
  average *= 0.8;
  for (var i = 1; i < barCount; i++) {
    average = average - Math.sqrt(average) + 1;
    if (average < 0) {
      average = 0;
    }
    (function( i, average ) {
      setTimeout( function() {
          bars[i] = average;
      }, delay * ( forward ? i : 60 - i ) );
    })(i, average);
  }
  draw();
  requestAnimationFrame(render);
};

const draw = () => {
  // clear the current state
  ctx.clearRect( 0, 0, width, height );

  // set the fill style

  var average = bars[ 0 ];
  var color = getColor( average );
  rect( ( width / 2 ) - ( lineWidth / 2 ), ( height / 2 ) - ( average / 2 ), lineWidth, average, color );
  for ( var i = 1; i < barCount; i++ ) {
      average = bars[ i ];
      color = getColor( average );

      if ( average === undefined || average <= 0 ) {
          average = 0;
      } else {
          rect( ( width / 2 ) - ( lineWidth / 2 ) + ( ( lineWidth + lineGap ) * i ), ( height / 2 ) - ( average / 2 ), lineWidth, average, color );
          rect( ( width / 2 ) - ( lineWidth / 2 ) - ( ( lineWidth + lineGap ) * i ), ( height / 2 ) - ( average / 2 ), lineWidth, average, color );
      }
  }
};

let colors = [
  '#111',
  'purple',
  'magenta',
  'pink',
  'red',
  'orange',
  'yellow',
  'green',
  'cyan',
  'blue'
];
const getColor = (val) => {
  if ( hue == 0 ) {
    colors = [
      '#111',
      'purple',
      'magenta',
      'pink',
      'red',
      'orange',
      'yellow',
      'green',
      'cyan',
      'blue'
    ];
    for ( var i = 0; i < hue; i++ ) {
      colors.unshift( colors.pop() );
    }
    var whiteIndex = colors.indexOf( '#111' );
    colors.splice( whiteIndex, 1 );
    colors.unshift( '#111' );
  } else {
    colors = Array( 10 );
    colors[ 0 ] = '#111';
    var lightness = 49;
    for ( var j = 9; j >= 1; j-- ) {
      colors[ j ] = 'hsl(' + hue + ', 100%, ' + lightness + '%)';
      lightness -= 5;
    }
  }

  var colorIndex = Math.floor( val / ( 10 * heightFactor ) );
  if ( colorIndex > 9 ) {
      colorIndex = 9;
  } else if ( colorIndex < 0 ) {
      colorIndex = 0;
  }
  return colors[ colorIndex ];
};

const rect = ( x, y, width, height, color ) => {
  ctx.save();
  ctx.beginPath();
  ctx.rect( x, y, width, height );
  ctx.stroke();
  ctx.clip();

  ctx.fillStyle = color;
  ctx.fillRect( 0,0,canvas.width,canvas.height );
  ctx.restore();
};

const flip = () => {
  if ( animate == 'auto' ) {
    if ( forward ) {
        forward = false;
    } else {
        forward = true;
    }
  }
  setTimeout( flip, animateSwitch );
};

const getAverageVolume = (array) => {
  var values = 0;
  var average;

  var length = array.length;

  // get all the frequency amplitudes
  for (var i = 0; i < length; i++) {
    values += array[i];
  }

  average = values / length;
  return average;
};

const fullScreen = () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  barCount = (width / (lineWidth * 2)) / 2;
};

module.exports = {
  start () {
    fullScreen();
    flip();
    requestAnimationFrame(render);
  }
};
