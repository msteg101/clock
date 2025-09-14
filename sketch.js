//sketch.js

let stars = [];
let numStars = 400;
let y1 = 250;
let size1 = 110;
let msize = 80;
let sunx;

function setup() {
  createCanvas (800,600);
  
  for (let i = 0; i < numStars; i++) {
    stars[i] = createVector(random(width), random(height), random(1,6));
  }
}

function draw() {
  background (20,0,80);
  let mth = month();
  let dy = day();
  let hr = hour();
  let mn = minute();
  let sc = second();
  
  //stars
  push();
  fill(255);
  if (hr +1) {
    for (let i = 0; i < numStars; i++){
     ellipse(stars[i].x, stars[i].y, stars[i].z,stars[i].z);
    }
  }
  pop();

  //moon
  push();
  translate (620,90);
  noStroke();
  fill(255,245,235);
  ellipse(0,0,msize,msize);
  fill(225,205,185);
  let angle = sc * 0.164;
  rotate(angle);
  ellipse(0,0,msize/2,msize);
  pop();
  
  //sun
  push();
  stroke(255, 200, 5);
  fill(255,235,105);
  strokeWeight (5);
  let sunx = map(mn,0,59,0,width);
  ellipse (sunx,y1,size1,size1)
  pop();

  //mountains
  push();
  let mount1 = map(dy,1,31,90,121);
  noStroke();
  fill(mount1);
  beginShape ();
  vertex (0, 600);
  vertex (0, 450);
  vertex (40, 310);
  vertex (150, 400);
  vertex (200, 330);
  vertex (300, 400);
  vertex (400, 250);
  vertex (550, 400);
  vertex (625, 300);
  vertex (700, 400);
  vertex (800, 260);
  vertex (800, 600);
  endShape (CLOSE);
  pop();

  push();
  let mount2 = map(mth,1,12,50,35);
  scale (1.75, 1.15);
  fill(50);
  beginShape ();
  vertex (0, 600);
  vertex (0, 400);
  vertex (60, 290);
  vertex (150, 400);
  vertex (200, 330);
  vertex (300, 400);
  vertex (400, 250);
  vertex (550, 400);
  vertex (625, 300);
  vertex (700, 400);
  vertex (800, 260);
  vertex (800, 600)
  endShape (CLOSE);
  pop();
}