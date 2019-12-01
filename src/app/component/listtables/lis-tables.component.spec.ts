import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LisTablesComponent} from './lis-tables.component';

describe('ListtablesComponent', () => {
  let component: LisTablesComponent;
  let fixture: ComponentFixture<LisTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LisTablesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LisTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
