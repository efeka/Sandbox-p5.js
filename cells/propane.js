class Propane extends Cell {
  
  constructor(x, y, row, col, type) {
    super(x, y, row, col, type);
    this.direction = -1;
  }
  
  update() {
    if (super.hasTop(CellTypes.EMPTY)) {
      grid[this.row - 1][this.col] = this.type;
      grid[this.row][this.col] = CellTypes.EMPTY;
      this.row--;
      this.y -= cellSize;
    }
    else if (super.hasTopLeft(CellTypes.EMPTY)) {
      grid[this.row - 1][this.col - 1] = this.type;
      grid[this.row][this.col] = CellTypes.EMPTY;
      this.row--;
      this.col--;
      this.y -= cellSize;
      this.x -= cellSize;
    }
    else if (super.hasTopRight(CellTypes.EMPTY)) {
      grid[this.row - 1][this.col + 1] = this.type;
      grid[this.row][this.col] = CellTypes.EMPTY;
      this.row--;
      this.col++;
      this.y -= cellSize;
      this.x += cellSize;
    }
    else {
      if (this.direction == -1) {
        if (super.hasLeft(CellTypes.EMPTY)) {
          grid[this.row][this.col - 1] = this.type;
          grid[this.row][this.col] = CellTypes.EMPTY;
          this.x -= cellSize;
          this.col--;
        }
        else if (super.hasRight(CellTypes.EMPTY)) {
          grid[this.row][this.col + 1] = this.type;
          grid[this.row][this.col] = CellTypes.EMPTY;
          this.x += cellSize;
          this.col++;
          this.direction = 1;
        }
      }
      else if (this.direction == 1) {
        if (super.hasRight(CellTypes.EMPTY)) {
          grid[this.row][this.col + 1] = this.type;
          grid[this.row][this.col] = CellTypes.EMPTY;
          this.x += cellSize;
          this.col++;
        }     
        else if (super.hasLeft(CellTypes.EMPTY)) {
          grid[this.row][this.col - 1] = this.type;
          grid[this.row][this.col] = CellTypes.EMPTY;
          this.x -= cellSize;
          this.col--;
          this.direction = -1;
        }     
      }
    }    
  }
  
  show() {
    fill(100, 100, 150, 150);
    stroke(90, 90, 140, 150);
    rect(this.x, this.y, cellSize, cellSize);      
  }
  
}