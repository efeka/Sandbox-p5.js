class Wood extends Cell {
  
  constructor(x, y, row, col, type) {
    super(x, y, row, col, type);
  }
  
  update() {
    
  }
  
  show() {
    fill(166, 93, 53);
    stroke(150, 47, 44);  
    rect(this.x, this.y, cellSize, cellSize);
  }
  
}