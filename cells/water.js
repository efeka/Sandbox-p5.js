class Water extends Cell {
  
  constructor(x, y, row, col, type) {
    super(x, y, row, col, type);
    this.direction = -1;
  }
  
  update() {
    if (super.hasBot(CellTypes.EMPTY)) {
      grid[this.row + 1][this.col] = this.type;
      grid[this.row][this.col] = CellTypes.EMPTY;
      this.row++;
      this.y += cellSize;
    }
    else if (super.hasBotLeft(CellTypes.EMPTY)) {
      grid[this.row + 1][this.col - 1] = this.type;
      grid[this.row][this.col] = CellTypes.EMPTY;
      this.row++;
      this.col--;
      this.y += cellSize;
      this.x -= cellSize;
    }
    else if (super.hasBotRight(CellTypes.EMPTY)) {
      grid[this.row + 1][this.col + 1] = this.type;
      grid[this.row][this.col] = CellTypes.EMPTY;
      this.row++;
      this.col++;
      this.y += cellSize;
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
    fill(114, 173, 238);
    stroke(67, 94, 219);
    rect(this.x, this.y, cellSize, cellSize);  
  }
  
}