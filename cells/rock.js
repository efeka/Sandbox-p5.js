class Rock extends Cell {
  
  constructor(x, y, row, col, type) {
    super(x, y, row, col, type);
  }
  
  update() {
    
  }
  
  show() {
    fill(160, 171, 177);
    stroke(94, 106, 130);
    rect(this.x, this.y, cellSize, cellSize);  
  }
  
}