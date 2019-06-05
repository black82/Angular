import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchbyCityComponent} from './searchby-city.component';

describe('SearchbyCityComponent', () => {
  let component: SearchbyCityComponent;
  let fixture: ComponentFixture<SearchbyCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchbyCityComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbyCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
