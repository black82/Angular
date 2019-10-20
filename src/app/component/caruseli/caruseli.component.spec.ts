import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CaruseliComponent} from './caruseli.component';

describe('CaruseliComponent', () => {
  let component: CaruseliComponent;
  let fixture: ComponentFixture<CaruseliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CaruseliComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaruseliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
