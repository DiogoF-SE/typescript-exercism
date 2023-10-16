export class Matrix {
  matrix: number[][];
  rows: number[][];
  columns: number[][];

  constructor(matrixString: string) {
    this.rows = matrixString.split(/\n/).map(row => row.split(/\s+/).map(Number));
    this.matrix = this.rows.slice();
    this.columns = this.matrix[0].map((_, i) => this.matrix.map(row => row[i]));
  }
}