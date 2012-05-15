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

function makeBuffers(list) {
	console.log('list: ', list);
	buffers.g = list[0];
	buffers.a = list[1];
	buffers.b = list[2];
	buffers.d = list[3];
	buffers.e = list[4];
}


function finishedLoading(bufferList) {
	makeBuffers(bufferList);
	bindToKeys();
}

function bindToKeys() {
	$('body').bind('keydown', function(e){
		var key = e.keyCode;
		switch (key) {
			case 83 :
				playSound(buffers.g, 0);
				break;
			case 68 :
				playSound(buffers.a, 0);
				break;
			case 70 :
				playSound(buffers.b, 0);
				break;
			case 74 :
				playSound(buffers.d, 0);
				break;
			case 75 :
				playSound(buffers.e, 0);
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


function init() {
    context = new webkitAudioContext();
	bufferLoader = new BufferLoader(context, sounds, finishedLoading);
	bufferLoader.load();
}


$(document).ready(function() {
	init();
	console.log('*hi');
});