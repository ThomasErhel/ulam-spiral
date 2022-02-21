// State of spiral
let x, y;
let px, py;
let step = 1;
let state = 0;
let numSteps = 1;
let turnCounter = 1;

// Scale / resolution
let stepSize = 10;
let totalSteps;

// Function to test if number is prime
function isPrime(value) {
  if (value == 1) return false;
  for (let i = 2; i <= sqrt(value); i++) {
    if (value % i == 0) {
      return false;
    }
  }
  return true;
}

function setup() {
  createCanvas(500, 500);

  // set up spiral
  const cols = width / stepSize;
  const rows = height / stepSize;
  totalSteps = cols * rows;
  x = width / 2;
  y = height / 2;
  px = x;
  py = y;
  background(255, 165, 0);
}

function draw() {
  
  // If prime draw circle
  if (isPrime(step)) {
    fill(255);
    stroke(255);
    circle(x, y, stepSize * 0.5);
  }
  
  // Connect current to previous with a line
  line(x, y, px, py);
  px = x;
  py = y;

  // Move according to state
  switch (state) {
    case 0:
      x += stepSize;
      break;
    case 1:
      y -= stepSize;
      break;
    case 2:
      x -= stepSize;
      break;
    case 3:
      y += stepSize;
      break;
  }
  
  // Change state
  if (step % numSteps == 0) {
    state = (state + 1) % 4;
    turnCounter++;
    if (turnCounter % 2 == 0) {
      numSteps++;
    }
  }
  step++;
  
  // Are we done?
  if (step > totalSteps) {
    noLoop();
  }

}
