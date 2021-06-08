img = "";

function preload() {
          img = loadImage('dog_cat.jpg');    
}

function setup() {
          canvas = createCanvas(640, 420);
          canvas.center();


}

function draw() {
          image(img, 0, 0, 640, 420);
          fill(0, 127, 0);
          text('Dog', 45, 75);
          noFill();
          stroke(0, 127, 0);
          rect(30, 60, 450, 350);
}