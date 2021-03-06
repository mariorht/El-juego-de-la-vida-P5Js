var buttonPlay;
var buttonPause;
var buttonRestart;
var sliderFPS;

var p;

function setup() {
    grid_size = 20;
    width_canvas = 50;
    height_canvas = 30;
    canvas = createCanvas(width_canvas*grid_size, height_canvas*grid_size);
    canvas.mouseClicked(viveOmuere);

    buttonPlay = createButton("PLAY");
    buttonPlay.mousePressed(play);

    buttonPause = createButton("PAUSE");
    buttonPause.mousePressed(pause);

    buttonRestart = createButton("RESTART");
    buttonRestart.mousePressed(restart);

    sliderFPS = createSlider(0, 50, 10);
    sliderFPS.position(10, height_canvas*grid_size + 30);
    sliderFPS.style('width', '150px');



    p = new Poblacion;
    frameRate(0);
    background(220);
    drawGrid();
    p.draw();

  }
  
function draw() {
  background(220);
  drawGrid();

  p.draw();
  p.update();

  frameRate(sliderFPS.value());
}


function drawGrid() {
  for (var x = 0; x <= width; x += grid_size) {
    for (var y = 0; y <= height; y += grid_size) {
      stroke(51);
      strokeWeight(1);
      line(x, 0, x, height);
      line(0, y, width, y);
    }
  }
}


function play() {
  frameRate(20);
}


function pause() {
  frameRate(0);
}

function restart() {
  p.poblacionInicial();
  background(220);
  drawGrid();
  p.draw();

}

function viveOmuere()
{
  let x = Math.floor(mouseX/grid_size);
  let y = Math.floor(mouseY/grid_size);

  p.getCelula(x,y).cambiaEstado();
  background(220);
  drawGrid();
  p.draw()

}