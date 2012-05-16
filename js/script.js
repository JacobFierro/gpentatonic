/* Author:

*/

var context;
var bufferLoader;
var sounds = [
	'sounds/g.mp3',
	'sounds/a.mp3',
	'sounds/b.mp3',
	'sounds/d.mp3',
	'sounds/e.mp3'
];
var buffers = [];
var colors = {
	g : '#B6E1E8',
	a : '#D5E8B6',
	b : '#E8D1B6',
	d : '#D3C9DC',
	e : '#F8C2CD'
}

function makeBuffers(list) {
	buffers.g = list[0];
	buffers.a = list[1];
	buffers.b = list[2];
	buffers.d = list[3];
	buffers.e = list[4];
}

function setStatus(msg) {
	$('#alert').text(msg);
}

function bindToKeys() {
	$('body').bind('keydown', function(e){
		var key = e.keyCode;
		switch (key) {
			case 83 :
				playSound(buffers.g, 0);
				setColor('g');
				break;
			case 68 :
				playSound(buffers.a, 0);
				setColor('a');
				break;
			case 70 :
				playSound(buffers.b, 0);
				setColor('b');
				break;
			case 74 :
				playSound(buffers.d, 0);
				setColor('d');
				break;
			case 75 :
				playSound(buffers.e, 0);
				setColor('e');
				break;
		}
	});
}

function playSound(buffer, time) {
  var source = context.createBufferSource();
  source.buffer = buffer;
  source.connect(context.destination);
  source.noteOn(time);
}

function setColor (note) {
	$('body').animate({ backgroundColor: colors[note] }, 100);
}

function finishedLoading(bufferList) {
	makeBuffers(bufferList);
	bindToKeys();
	setStatus('ready');
}

function init() {
    context = new webkitAudioContext();
	bufferLoader = new BufferLoader(context, sounds, finishedLoading);
	bufferLoader.load();
}


$(document).ready(function() {
	init();
});