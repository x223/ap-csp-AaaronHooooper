var strokeColor = 'blue';

function setup() {
 createCanvas(windowWidth, windowHeight);
 background(23,87,157,98);
}

function draw() {
 if (mouseIsPressed); {
  stroke(random(255),random(255),random(255));
  line(pmouseX, pmouseY, mouseX, mouseY);

 }
}
 function keyTyped() {
  if (key === 'b') {
   strokeColor = '2A2DC7';
  } else if (key === 'p') {
   strokeColor = '#E32173';
   weight = 10

  }
 }
 //Today went well, i had gotten the stroke function and color function