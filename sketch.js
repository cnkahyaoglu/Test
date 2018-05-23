var capture;
var smallPoint, largePoint;
var osc, fft;
var song;


var kareler = [];

function preload() {
  song = loadSound('sounds/bubbles.mp3');
}


function setup() {
  createCanvas(windowWidth/1.5, windowHeight/1.5);


    song.play();

  frameRate(200);

	capture = createCapture(VIDEO);
	capture.size(windowWidth/1.5, windowHeight/1.5);
  smallPoint = 10;
  largePoint = 70;
  imageMode(CENTER);
  noStroke();
  background(255);
  capture.loadPixels();






}

function draw() {

for (var g = 0; g < 10; g++){
kareler[g] = new Kareler();
}


var sr = map(mouseX, 0, windowWidth, 1, 2);
song.rate(sr);



}


function Kareler(){

  this.pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  this.x = floor(random(capture.width));
  this.y = floor(random(capture.height));

  stroke(0)

  this.pix = capture.get(this.x, this.y);
  fill(this.pix, 128);
  rect(this.x, this.y, this.pointillize, this.pointillize);

}
