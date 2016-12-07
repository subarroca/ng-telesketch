import { Component, OnInit, ElementRef } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { Segment } from '../shared/segment';
import { Point } from '../shared/point';
import { Drawing } from '../shared/drawing';


@Component({
  selector: 'ng2-kw-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {
  width: number = 800;
  height: number = 500;

  private drawing: Drawing = new Drawing();

  private headingPoint: Point = new Point();

  private DELTA: number = 5;
  private lastDirection: string;


  constructor(
    private element: ElementRef
  ) { }

  ngOnInit() {
    this.element.nativeElement.style.setProperty('--width', this.width);
    this.element.nativeElement.style.setProperty('--height', this.height);

    this.setHeading();


    Observable
      .fromEvent(document, 'keydown')
      .subscribe((event: KeyboardEvent) => {
        switch (event.code) {
          case 'ArrowUp':
            if (this.lastDirection !== 'up') {
              this.endSegment();
              this.startSegment();
            } else {
              this.updateSegment();
            }

            this.setHeading(this.headingPoint.x, this.headingPoint.y - this.DELTA);
            this.lastDirection = 'up';
            break;

          case 'ArrowDown':
            if (this.lastDirection !== 'down') {
              this.endSegment();
              this.startSegment();
            } else {
              this.updateSegment();
            }

            this.setHeading(this.headingPoint.x, this.headingPoint.y + this.DELTA);
            this.lastDirection = 'down';

            break;

          case 'ArrowLeft':
            if (this.lastDirection !== 'left') {
              this.endSegment();
              this.startSegment();
            } else {
              this.updateSegment();
            }

            this.setHeading(this.headingPoint.x - this.DELTA, this.headingPoint.y);
            this.lastDirection = 'left';

            break;

          case 'ArrowRight':
            if (this.lastDirection !== 'right') {
              this.endSegment();
              this.startSegment();
            } else {
              this.updateSegment();
            }
            
            this.setHeading(this.headingPoint.x + this.DELTA, this.headingPoint.y);
            this.lastDirection = 'right';

            break;

          case 'Space':
            console.log('space');
            break;

          // default:
          //   // code...
          //   break;
        }
      });
  }

  setHeading(x: number = this.width / 2, y: number = this.height / 2) {
    this.headingPoint.x = x;
    this.headingPoint.y = y;
  }


  startSegment() {
    this.drawing.startSegment(this.headingPoint);
  }

  endSegment() {
    this.drawing.endSegment(this.headingPoint);
  }

  updateSegment() {
    this.drawing.updateSegment(this.headingPoint);
  }

}
