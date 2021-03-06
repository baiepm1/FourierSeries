let time = 0;
let wave = [];

var slider;

function setup() {
  createCanvas(600, 400);
	slider = createSlider(1,25,1);//1 to 25, start at 1
	
}

function draw() {
  background(0);
	
	translate(150,200);
	let x=0;
	let y=0;
	
	for(let i=0; i < slider.value(); i++){
	let prevx = x;
	let prevy = y;
	let n = i * 2 + 1;	//keep n odd..0=1, 1=3, 2=5...
	let radius = 50 * (4 / (n*PI));
	x += radius * cos(n*time);
	y += radius * sin(n*time);
	
	text("n = " +  slider.value(),-140,180);
	stroke(255, 100);
	noFill();
	ellipse(prevx,prevy,radius *2);
	
	fill(255);
	stroke(255);
	line(prevx,prevy,x,y);		//connect line from center to new edge
	//ellipse(x,y,8);
	}
	
	wave.unshift(y);		//moves items in array over one, adds newest to front
	translate(200, 0);
	line(x-200,y,0,wave[0]);	//connect line from xy to front of wave
	beginShape();
	noFill();
	for(let i = 0; i < wave.length; i++){
	vertex(i, wave[i]);
	}
	endShape();				
	
	time -= 0.04;
	
	if(wave.length > 220){	//delete waveform before goes off screen
	wave.pop();
	}
}
