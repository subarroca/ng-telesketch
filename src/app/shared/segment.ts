import { Point } from './point';

export class Segment {
  start: Point;
  end: Point;


  constructor(options: {
    start?: Point,
    end?: Point
  } = {}) {
    this.start = new Point(options.start);
    this.end = new Point(options.end);
  }

  get path() {
    return `M${this.start.x},${this.start.y}L${this.end.x},${this.end.y}`;
  }
}
