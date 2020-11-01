let troops_capacity = [25, 15, 10, 10, 80, 50, 50, 100 ];
let troops = [];
let multiplier = [1, 1.5, 3, 7.5];
let total_capacity;
let capacity = [];
let input = [], button;
let images = [];
let result = [];
function preload() {
  for(let i = 0; i < 8; i++) {
    let file = str(i) + '.png';
    images[i] = loadImage(file);
  }
}

function setup() {
  createCanvas(500, 200);

    
  for (let i = 0; i < 8; i++) {
    image(images[i], 17+i*58, 0);
    input[i] = createInput();
    input[i].size(50);
    input[i].position(i*58, 25);
    
  }
  button = createButton("submit");
  button.position(8*58, 25);
  button.size(60,23)
  button.mousePressed(calculate);

}

function calculate() {
  total_capacity = 0;
  for (i = 0; i < 8; i++) {
    troops[i] = input[i].value();
    total_capacity += troops[i] * troops_capacity[i];
  }
    for (i = 0; i < 4; i++) {
    result[i] = [];
    for (j = 0; j < 8; j++) {
      result[i][j] = 0;
    }
  }
  for (i = 0; i < 4; i++) {
    capacity[i] = 0;
    capacity[i] = total_capacity / 13 * multiplier[i];
    for (j = 0; j < 8; j++) {
      while (troops[j] > 0 && capacity[i] > 0) {
        troops[j]--;
        result[i][j]++;
        capacity[i] -= troops_capacity[j];
      }
    }
  }
  for (i = 0; i < 4; i++) {
    for (j = 0; j < 8; j++) {
      text(result[i][j], 17+j*60, 70+i*20);
    }
  }
}

function draw() {
  //background(220);
}