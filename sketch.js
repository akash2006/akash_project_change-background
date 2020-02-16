
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);

  
}


function draw(){
  // Pass the values to the background() function you have learnt previously.
  background(r,g,b);
  
  // change the value of Red based on the mouse movement about the X axis
  if(mouseX>0&&mouseX<400){
    r=r+30;
  }
  // change the value of Green based on the mouse movement about the X axis
  if(mouseX>400 && mouseX<800){
    g=g+10;
  }
  // change the value of Blue based on the mouse movement about the X axis
  if(mouseX>800 && mouseX<1200){
    b=b-80;
  }
  // Use the map() function to do so. 

  
  // Create an ellipse that will move around with you mouse about the X axis.
  strokeWeight(7);
  fill(r,g,b);
  ellipse(mouseX,mouseY,50);
  // Remember to fill the canvas with white paint before creating the ellipse.
}