var capture;
var smallPoint, largePoint;
var osc, fft;




function setup() {
  createCanvas(windowWidth, windowHeight);

	capture = createCapture(VIDEO);
	capture.size(windowWidth, windowHeight);
  smallPoint = 10;
  largePoint = 100;
  imageMode(CENTER);
  noStroke();
  background(255);
  capture.loadPixels();

  osc = new p5.TriOsc(); // set frequency and type
  osc.amp(0.5);

  fft = new p5.FFT();
  osc.start();

}

function draw() {

  var pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  	var x = floor(random(capture.width));
  	var y = floor(random(capture.height));

	  var q = floor(random(capture.width));
 		var w = floor(random(capture.height));

	  var a = floor(random(capture.width));
  	var b = floor(random(capture.height));

	  var k = floor(random(capture.width));
  	var l = floor(random(capture.height));

	var aa = floor(random(capture.width));
  	var bb = floor(random(capture.height));

	var kk = floor(random(capture.width));
  	var ll = floor(random(capture.height));

	var qq = floor(random(capture.width));
  	var ww = floor(random(capture.height));

	stroke(0)

  var pix = capture.get(x, y);
  fill(pix, 128);
  rect(x, y, pointillize, pointillize);

	var pix2 = capture.get(q, w);
  fill(pix2, 128);
  rect(q, w, pointillize, pointillize);

	var pix3 = capture.get(a, b);
  fill(pix3, 128);
  rect(a, b, pointillize, pointillize);

	var pix4 = capture.get(k, l);
  fill(pix4, 128);
  rect(k, l, pointillize, pointillize);

	var pix5 = capture.get(qq, ww);
  fill(pix5, 128);
  rect(qq, ww, pointillize, pointillize);

	var pix6 = capture.get(aa, bb);
  fill(pix6, 128);
  rect(aa, bb, pointillize, pointillize);

	var pix7 = capture.get(kk, ll);
  fill(pix7, 128);
  rect(k, l, pointillize, pointillize);

  var freq = map(mouseX, 0, width, 880, 40);
  osc.freq(freq);

  var amp = map(mouseY, 0, height, 0.01, 1);
  osc.amp(amp);
}
