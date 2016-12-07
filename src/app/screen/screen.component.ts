import { Component, OnInit, ElementRef } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { Point } from '../shared/point';
import { Image } from '../shared/image';


@Component({
  selector: 'ng2-kw-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {
  width: number = 800;
  height: number = 500;

  private image: Image = new Image();

  private headingPoint: Point = new Point();

  private DELTA: number = 5;
  private lastDirection: string;
  private isDrawing: boolean = true;


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
            this.parseKeyDown('up', 0, -1);
            break;

          case 'ArrowDown':
            this.parseKeyDown('down', 0, 1);
            break;

          case 'ArrowLeft':
            this.parseKeyDown('left', -1, 0);
            break;

          case 'ArrowRight':
            this.parseKeyDown('right', 1, 0);
            break;

          case 'Space':
            this.isDrawing = !this.isDrawing;
            if (!this.isDrawing) {
              this.endSegment();
            } else {
              this.startSegment();
            }

            break;
        }
      });


    Observable
      .fromEvent(document, 'keyup')
      .subscribe((event: KeyboardEvent) => {
        this.element.nativeElement.style.setProperty('--direction-x', 0);
        this.element.nativeElement.style.setProperty('--direction-y', 0);
      });
  }

  setHeading(x: number = this.width / 2, y: number = this.height / 2) {
    if (x > 5 && x < this.width - 5) {
      this.headingPoint.x = x;
    }

    if (y > 5 && y < this.height - 5) {
      this.headingPoint.y = y;
    }
  }


  startSegment() {
    this.image.startSegment(this.headingPoint);
  }

  endSegment() {
    this.image.endSegment(this.headingPoint);
  }

  updateSegment() {
    this.image.updateSegment(this.headingPoint);
  }

  parseKeyDown(direction: string, xDir: number, yDir: number) {
    if (this.isDrawing) {
      if (this.lastDirection !== direction) {
        this.endSegment();
        this.startSegment();
        this.setHeading(this.headingPoint.x + xDir * this.DELTA, this.headingPoint.y + yDir * this.DELTA);

      } else {
        this.setHeading(this.headingPoint.x + xDir * this.DELTA, this.headingPoint.y + yDir * this.DELTA);
        this.updateSegment();
      }
    }

    this.lastDirection = direction;
    this.element.nativeElement.style.setProperty('--direction-x', xDir);
    this.element.nativeElement.style.setProperty('--direction-y', -yDir);
  }

}
