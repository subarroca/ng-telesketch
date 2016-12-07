/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './telesketch.component';

describe('App: Ng2KwTelesketch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
  });

  it('should create the telesketch', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let telesketch = fixture.debugElement.componentInstance;
    expect(telesketch).toBeTruthy();
  }));

  it(`should have as title 'telesketch works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let telesketch = fixture.debugElement.componentInstance;
    expect(telesketch.title).toEqual('telesketch works!');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('telesketch works!');
  }));
});
