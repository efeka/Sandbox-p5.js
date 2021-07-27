class Cell {
  
  constructor(x, y, row, col, type) {
    this.x = x;
    this.y = y;
    this.row = row;
    this.col = col;
    this.type = type;
    
    if (this.constructor === Cell) {
      throw new TypeError('Abstract class "Cell" cannot be instantiated directly.');
    }

    if (this.update === undefined) {
      throw new TypeError('Classes extending the abstract class "Cell" must contain "update()" method.');
    } 
  
    if (this.show === undefined) {
      throw new TypeError('Classes extending the abstract class "Cell" must contain "show()" method.');
    }     
  }

  /*
    functions below are for checking if corresponding
    location on the grid is the given type
  */
  hasTopLeft(type) {
    return this.row > 0 && this.col > 0 && grid[this.row - 1][this.col - 1] == type;
  }
  
  hasTop(type) {
    return this.row > 0 && grid[this.row - 1][this.col] == type;
  }
  
  hasTopRight(type) {
    return this.row > 0 && this.col < cols - 1 && grid[this.row - 1][this.col + 1] == type;
  }
  
  hasLeft(type) {
    return this.col > 0 && grid[this.row][this.col - 1] == type;
  }
  
  hasRight(type) {
    return this.col < cols - 1 && grid[this.row][this.col + 1] == type;
  }
  
  hasBotLeft(type) {
    return this.row < rows - 1 && this.col > 0 && grid[this.row + 1][this.col - 1] == type;
  }
  
  hasBot(type) {
    return this.row < rows - 1 && grid[this.row + 1][this.col] == type;
  }
  
  hasBotRight(type) {
    return this.row < rows - 1 && this.col < cols - 1 && grid[this.row + 1][this.col + 1] == type;
  }
  
}