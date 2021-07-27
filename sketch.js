const CellTypes = {
	EMPTY: 0,
	SAND: 1,
	WATER: 2,
	ROCK: 3,
    FIRE: 4,
    PROPANE: 5,
    WOOD: 6,
}

let rows = 50, cols = 50, cellSize = 10;
let grid = [];
let cells = [];

let buttons = [];
let selectedType = CellTypes.SAND;
let cursorSizeSlider, cursorSize;

function setup() {
  createCanvas(cols * cellSize, rows * cellSize);
  noCursor();
  
  for (let x = 0; x < rows; x++) {
    grid[x] = [];
    for (let y = 0; y < cols; y++) {
      grid[x][y] = CellTypes.EMPTY;
    }
  } 
  
  buttons[0] = createButton('Reset');
  buttons[0].position(cols * cellSize - 50, rows * cellSize);
  buttons[0].mousePressed(resetGame);
  
  buttons[1] = createButton('Eraser');
  buttons[1].position(0, rows * cellSize);
  buttons[1].mousePressed(selectEraser);

  cursorSizeSlider = createSlider(1, (int) (rows / 5), (int) ((rows / 5 + 1) / 2), 1);
  cursorSizeSlider.position(buttons[1].x + buttons[1].width + 1, rows * cellSize);
  cursorSizeSlider.style('width', '80px');
  cursorSize = cursorSizeSlider.value() * cellSize;  
  
  buttons[2] = createButton('Sand');
  buttons[2].position(0, buttons[1].y + buttons[1].height + 1);
  buttons[2].mousePressed(selectSand);
  
  buttons[3] = createButton('Water');
  buttons[3].position(buttons[2].x + buttons[2].width + 1, buttons[2].y);
  buttons[3].mousePressed(selectWater); 
  
  buttons[4] = createButton('Rock');
  buttons[4].position(buttons[3].x + buttons[3].width + 1, buttons[3].y);
  buttons[4].mousePressed(selectRock);

  buttons[5] = createButton('Fire');
  buttons[5].position(buttons[4].x + buttons[4].width + 1, buttons[4].y);
  buttons[5].mousePressed(selectFire);  
  
  buttons[6] = createButton('Propane');
  buttons[6].position(0, buttons[4].y + buttons[4].height + 1);
  buttons[6].mousePressed(selectPropane);  
  
  buttons[7] = createButton('Wood');
  buttons[7].position(buttons[6].x + buttons[6].width + 1, buttons[6].y);
  buttons[7].mousePressed(selectWood);   
  
}

function draw() {
  background(51);
  //print((int) (frameRate()));
  
  for (let i = 0; i < cells.length; i++) {
    cells[i].show();
    cells[i].update();
  }
  
  //draw cursor
  stroke(255);
  noFill();
  cursorSize = cursorSizeSlider.value() * cellSize;
  rect((int) (mouseX / cellSize) * cellSize, (int) (mouseY / cellSize) * cellSize, cursorSize, cursorSize);
  
  if (mouseIsPressed) {
    if (mouseX > 0 && mouseX < cols * cellSize && mouseY > 0 && mouseY < rows * cellSize) {
      let row = (int) (mouseY / cellSize);
      let col = (int) (mouseX / cellSize);
      let x = (int) (col * cellSize);
      let y = (int) (row * cellSize);
      
      //add cells according to cursor size
      if (selectedType != CellTypes.EMPTY) {
        for (let i = row; i < row + cursorSizeSlider.value() && i < rows; i++) {
          for (let j = col; j < col + cursorSizeSlider.value() && j < cols; j++) {
            if (grid[i][j] != selectedType && grid[i][j] == CellTypes.EMPTY) {
              addCell(i, j, selectedType);
              grid[i][j] = selectedType;
            }
          }
        }
      }
      else {
        eraseCells(row, col, row + cursorSizeSlider.value(), col + cursorSizeSlider.value()); 
      }
      
    }    
  }  
  
}

function eraseCells(startRow, startCol, endRow, endCol) {
  for (let i = cells.length - 1; i >= 0; i--) {
    if (cells[i].row >= startRow && cells[i].row < endRow && cells[i].col >= startCol && cells[i].col < endCol) {
      grid[cells[i].row][cells[i].col] = CellTypes.EMPTY;
      cells.splice(i, 1);
    }
  }
}

function removeCell(row, col) {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].row == row && cells[i].col == col) {
      cells.splice(i, 1);
      break;
    }
  }
  grid[row][col] = CellTypes.EMPTY;
}

function addCell(row, col, type) {
  if (grid[row][col] == CellTypes.EMPTY) {
    switch (type) {
      case CellTypes.SAND:
        cells.push(new Sand(col * cellSize, row * cellSize, row, col, type));
        break;
      case CellTypes.WATER:
        cells.push(new Water(col * cellSize, row * cellSize, row, col, type));
        break;
      case CellTypes.ROCK:
        cells.push(new Rock(col * cellSize, row * cellSize, row, col, type));
        break;
      case CellTypes.FIRE:
        cells.push(new Fire(col * cellSize, row * cellSize, row, col, type));
        break;
      case CellTypes.PROPANE:
        cells.push(new Propane(col * cellSize, row * cellSize, row, col, type));
        break;
      case CellTypes.WOOD:
        cells.push(new Wood(col * cellSize, row * cellSize, row, col, type));
        break;        
    }
    grid[row][col] = type;
  }
}

function mouseWheel(event) {
  cursorSizeSlider.elt.value = cursorSizeSlider.value() - event.delta / 100;
}

function resetGame() {
  for (let i = 0; i < grid.length; i++) 
    for (let j = 0; j < grid[i].length; j++) 
      grid[i][j] = CellTypes.EMPTY;
   
  cells.splice(0, cells.length);
}

function selectEraser() {
  selectedType = CellTypes.EMPTY;
}

function selectSand() {
  selectedType = CellTypes.SAND;
}

function selectWater() {
  selectedType = CellTypes.WATER;
}

function selectRock() {
  selectedType = CellTypes.ROCK;
}

function selectFire() {
  selectedType = CellTypes.FIRE;
}

function selectPropane() {
  selectedType = CellTypes.PROPANE;
}

function selectWood() {
  selectedType = CellTypes.WOOD;
}