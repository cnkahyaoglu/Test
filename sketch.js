var capture;
var smallPoint, largePoint;
var osc, fft;




function setup() {
  createCanvas(windowWidth, windowHeight);

  frameRate(200);

	capture = createCapture(VIDEO);
	capture.size(windowWidth/2, windowHeight/2);
  smallPoint = 4;
  largePoint = 40;
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

    var xx = floor(random(capture.width));
  	var yy = floor(random(capture.height));

	  var qqq = floor(random(capture.width));
 		var www = floor(random(capture.height));

	  var aaa = floor(random(capture.width));
  	var bbb = floor(random(capture.height));

	  var kkk = floor(random(capture.width));
  	var lll = floor(random(capture.height));

	  var aaaa = floor(random(capture.width));
  	var bbbb = floor(random(capture.height));

	  var kkkk = floor(random(capture.width));
  	var llll = floor(random(capture.height));

	  var qqqq = floor(random(capture.width));
  	var wwww = floor(random(capture.height));

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
  rect(kk, ll, pointillize, pointillize);

  var pix8 = capture.get(qqq, www);
  fill(pix8, 128);
  rect(qqq, www, pointillize, pointillize);

	var pix9 = capture.get(aaa, bbb);
  fill(pix9, 128);
  rect(aaa, bbb, pointillize, pointillize);

	var pix10 = capture.get(kkk, lll);
  fill(pix10, 128);
  rect(kkk, lll, pointillize, pointillize);

  var pix11 = capture.get(xx, yy);
  fill(pix11, 128);
  rect(xx, yy, pointillize, pointillize);

  var pix12 = capture.get(aaaa, bbbb);
  fill(pix12, 128);
  rect(aaaa, bbbb, pointillize, pointillize);

	var pix13 = capture.get(kkkk, llll);
  fill(pix13, 128);
  rect(kkkk, llll, pointillize, pointillize);

  var pix14 = capture.get(qqqq, wwww);
  fill(pix14, 128);
  rect(qqqq, wwww, pointillize, pointillize);

  var freq = map(mouseX, 0, width, 100, 300);
  osc.freq(freq);


}
