export class Matrix {
  matrix: number[][];
  matrixString: string;

  constructor(matrixString: string) {
    this.matrixString = matrixString;
    this.matrix = this.rows;
  }

  get rows(): number[][] {
    return this.matrixString
      .split(/\n/)
      .map((row) => row.split(/\s+/).map(Number));
  }

  get columns(): number[][] {
    return this.matrix[0].map((_, i) => this.matrix.map((row) => row[i]));
  }
}
