import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BycityandbranchComponent} from './bycityandbranch.component';

describe('BycityandbranchComponent', () => {
  let component: BycityandbranchComponent;
  let fixture: ComponentFixture<BycityandbranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BycityandbranchComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BycityandbranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
