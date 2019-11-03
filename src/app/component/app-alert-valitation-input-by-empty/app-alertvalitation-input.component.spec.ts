import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppAlertvalitationInputComponent} from './app-alertvalitation-input.component';

describe('AppAlertvalitationInputComponent', () => {
  let component: AppAlertvalitationInputComponent;
  let fixture: ComponentFixture<AppAlertvalitationInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppAlertvalitationInputComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAlertvalitationInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
