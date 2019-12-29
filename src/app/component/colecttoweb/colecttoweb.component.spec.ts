import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ColecttowebComponent} from './colecttoweb.component';

describe('ColecttowebComponent', () => {
    let component: ColecttowebComponent;
    let fixture: ComponentFixture<ColecttowebComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ColecttowebComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ColecttowebComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
