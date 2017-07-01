function Square() {

	this.r = random(0, 255);
	this.g = random(0, 255);
	this.b =random(0, 255);

	this.x = mouseX;
	this.y = mouseY;

	this.yspeed = random(-10, 10);
	this.xspeed = random(-10, 10);

	this.w = random(25, 50);
	this.h = random(25, 50);

	this.show = function() {

		rectMode(CENTER);

		fill(this.r, this.g, this.b);
		rect(this.x, this.y, this.w, this.w);
		noFill();

	}

	this.move = function() {

		this.x += this.xspeed;
		this.y += this.yspeed;

	}

}

var squares = [];

function preload() {

	song = loadSound("Sounds/bulletTrain.mp3");
	
}

function setup() {

	frameRate(60);
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {
	
	if (!song.isPlaying()) {

		song.play();

	}

	background(0);

	if(mouseIsPressed) {

		squares.push(new Square());

	}

	for (var i = 0; i < squares.length; i++) {

		if (squares[i].y <= 0 || squares[i].x >= width ||
			squares[i].y >= height || squares[i].x <= 0) {

			squares.splice(i, 1);
			break;

		}

	}

	for (var i = 0; i < squares.length; i++) {

		squares[i].move();
		squares[i].show();

	}

}
