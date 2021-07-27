class Fire extends Cell {
  
  constructor(x, y, row, col, type) {
    super(x, y, row, col, type);
    this.life = 255;
  }
  
  update() {
    this.life -= 10;
    if (this.life <= 0)
      removeCell(this.row, this.col);
    
    for (let i = this.row - 1; i <= this.row + 1; i++) {
      for (let j = this.col - 1; j <= this.col + 1; j++) {
        if (i >= 0 && j >= 0 && i < rows && j < cols) {
          if (grid[i][j] == CellTypes.PROPANE) {
            removeCell(i, j);
            addCell(i, j, CellTypes.FIRE);
          }
          else if (grid[i][j] == CellTypes.WOOD) {
            let burnChance = (int) (random(0, 30));
            if (burnChance == 0) { 
              removeCell(i, j);
              addCell(i, j, CellTypes.FIRE);
            }
          }
        }
      }
    }
  }
  
  show() {
    fill(255, this.life, 0);
    stroke(255, this.life, this.life);
    rect(this.x, this.y, cellSize, cellSize);      
  }
  
}