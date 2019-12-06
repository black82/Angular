import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OpitonComponent} from './opiton.component';

describe('OpitonComponent', () => {
  let component: OpitonComponent;
  let fixture: ComponentFixture<OpitonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OpitonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpitonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
