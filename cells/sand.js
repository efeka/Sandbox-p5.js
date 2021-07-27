class Sand extends Cell {
  
  constructor(x, y, row, col, type) {
    super(x, y, row, col, type);
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
    else if (super.hasBot(CellTypes.WATER)) {
      removeCell(this.row, this.col);
      addCell(this.row, this.col, CellTypes.WATER);
      removeCell(this.row + 1, this.col);
      addCell(this.row + 1, this.col, CellTypes.SAND);
    }
    else if (super.hasBotLeft(CellTypes.WATER)) {
      removeCell(this.row, this.col);
      addCell(this.row, this.col, CellTypes.WATER);
      removeCell(this.row + 1, this.col - 1);
      addCell(this.row + 1, this.col - 1, CellTypes.SAND);
    }
    else if (super.hasBotRight(CellTypes.WATER)) {
      removeCell(this.row, this.col);
      addCell(this.row, this.col, CellTypes.WATER);      
      removeCell(this.row + 1, this.col + 1);
      addCell(this.row + 1, this.col + 1, CellTypes.SAND);
    }
  }
  
  show() {
    fill(246, 228, 85);
    stroke(175, 162, 61);
    rect(this.x, this.y, cellSize, cellSize);  
  }
  
}