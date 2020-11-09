let troops_capacity = [25, 15, 10, 10, 80, 50, 50, 100];
let multiplier = [1, 1.5, 3, 7.5];
let levels = ['specjaliści surowcowi', 'zawodowi zbieracze', 'cierpliwi ciułacze', 'ambitni amatorzy'];
let total_capacity, capacity = [],
  troops = [];
let input = [],
  altinput, button;
let images = [],
  result = [];

function preload() {
  for (let i = 0; i < 8; i++) {
    let file = str(i) + '.png';
    images[i] = loadImage(file);
  }
}

function imagesLoad() {
  textSize(35);
  text("kalkulator zbieractwa", 100, -50);
  for (let i = 0; i < 8; i++) {
    image(images[i],  20 + i * 59,  40);
  }
  textSize(15);
}

function inputLoad() {
  //background(255);
  
  altinput = createInput();
  altinput.size(530);
  altinput.position(windowWidth/2 - 530/2 , windowHeight/2 - 530/2);
  for (let i = 0; i < 8; i++) {
    input[i] = createInput();
    input[i].size(40, 15);
    input[i].position(windowWidth/2 - 530/2 + i * 60, windowHeight/2 - 530/2 + 60);

  }
  button = createButton("submit");
  button.position(windowWidth/2 - 530/2 + 8 * 60, windowHeight/2 - 530/2 + 60);
  button.size(60, 22);
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  translate(windowWidth/2 - 530/2, windowHeight/2 - 530/2)
  background(220, 201, 164);
  fill(74, 60, 53);
  imagesLoad();
  inputLoad();
  button.mousePressed(calculate);
}

function calculate() {
  background(220, 201, 164);
  textSize(15);
  imagesLoad();
  total_capacity = 0;
  if (altinput.value() != "") {
    let altarray = altinput.value();
    altarray = altarray.replace(/\)/g, '');
    altarray = altarray.replace(/\(/g, '');
    altarray = altarray.replace(/\s/g, ',');
    altarray = altarray.replace(/,,,/g, ',');
    chars = altarray.split(',');
    for (i = 0; i < 8; i++) {
      troops[i] = int(chars[i]);
    }
  } else {
    for (i = 0; i < 8; i++) {
      troops[i] = input[i].value();
    }
  }
  for (i = 0; i < 8; i++) {
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
      text(result[i][j], 17 + j * 60, 120 + i * 20);
    }
    text(levels[i], 500, 121 + i * 20);
  }
}
