import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AnimationCursorComponent} from './animation-cursor.component';

describe('OpitonComponent', () => {
  let component: AnimationCursorComponent;
  let fixture: ComponentFixture<AnimationCursorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnimationCursorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationCursorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
