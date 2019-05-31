import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbyIndustryComponent } from './searchby-industry.component';

describe('SearchbyIndustryComponent', () => {
  let component: SearchbyIndustryComponent;
  let fixture: ComponentFixture<SearchbyIndustryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchbyIndustryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbyIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
