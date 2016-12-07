export class Point {
  x: number;
  y: number;

  constructor(options: {
    x?: number,
    y?: number
  } = {}) {
    this.x = options.x;
    this.y = options.y;
  }
}
