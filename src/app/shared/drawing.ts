import { Segment } from './segment';
import { Point } from './point';


export class Drawing {
  segments: Segment[] = [];

  startSegment(startPoint: Point) {
    this.segments.push(new Segment({
      start: startPoint
    }));
  }

  endSegment(endPoint: Point) {
    if (this.segments.length) {
      this.segments[this.segments.length - 1]
        .end = new Point(endPoint);
    }
  }

  updateSegment(endPoint: Point) {
    this.endSegment(endPoint);
  }
}
