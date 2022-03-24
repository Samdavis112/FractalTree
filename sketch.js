let angle;
let slider;
let slider2;
let depth;
let slider3;
let maxLength;

function setup() {
    slider = createSlider(0, (2 * Math.PI), Math.PI / 4, 0.01);
    slider2 = createSlider(0, 5, 0, 1);
    slider3 = createSlider(50, 200, 0, 1);
    let myCanvas = createCanvas(600, 500);
    myCanvas.parent("BoxForCanvas");
    slider.addClass("slider");
    slider2.addClass("slider");
    slider3.addClass("slider");
    slider.parent("sliders");
    slider2.parent("sliders");
    slider3.parent("sliders");
}

function draw() {
    angle = slider.value();
    depth = slider2.value();
    maxLength = slider3.value();
    background(51);
    stroke(255);
    translate(300, 500);
    branch(200 - maxLength);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 6-depth) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
 
}