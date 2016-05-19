
// The setup function runs once
function setup() {
  
  createCanvas(windowWidth, windowHeight);
}

//The draw function runs many times per second. The default rate is 60 frames per second!
function draw() {
	background(0, 100, 200);
	ellipse(550, 400, 200, 200)
	ellipse(550, 300, 150, 150)
	ellipse(550, 200, 100, 100)
		fill(0, 0, 0)
	rect(520, 100, 55, 55, 20)
		fill(0, 0, 0)
	rect(510, 130, 75, 25)
	ellipse(537, 185, 10, 10)
	ellipse(567, 185, 10, 10)
if (mouseIsPressed)
    ellipse(550, 425, 50, 50);
  else
    ellipse(550, 300, 35, 35);

  print(mouseIsPressed);
 
}
