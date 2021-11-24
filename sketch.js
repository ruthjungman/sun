var sunSize = 30;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
      // the starting size for the sun
     

 
     // The sun, a little circle on the horizon
    fill(255, 204, 0);
    ellipse(200, 298, sunSize, sunSize);
    
    // The land, blocking half of the sun
    fill(76, 168, 67);
    rect(0, 300, 400, 100);
    
    sunSize = sunSize +1;
};
