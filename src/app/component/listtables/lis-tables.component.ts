import {Component, Input, OnInit} from '@angular/core';
import {Company} from '../../DTO/CompanyDto';
import {FormGroup} from '@angular/forms';


@Component({
    selector: 'app-listtables',
    templateUrl: './lis-tables.component.html',
    styleUrls: ['./lis-tables.component.css']
})
export class LisTablesComponent implements OnInit {

    @Input()
    control: FormGroup;
    @Input()
    company: Company[];
    companyShouw: Company;
    conpanyPage: Company[];
    hideme = false;
    curentpage = 1;
    curentIndex = 1;

    constructor() {
    }

    ngOnInit() {

    }

    openModalWithClass(i: number) {
        this.companyShouw = null;
        this.companyShouw = this.company[i];

    }

    hide() {
        this.companyShouw = null;
    }


    next() {
        if (this.curentIndex + 10 > this.company.length) {
            this.curentIndex = this.curentpage * 10;
            this.copyarr(this.curentIndex, (this.curentIndex + 10));
            this.curentpage++;
        }
    }

    previos() {
        if (this.curentIndex - 10 < this.company.length) {
            this.curentIndex = this.curentpage * 10;
            this.copyarr(this.curentIndex, (this.curentIndex - 10));
            this.curentpage++;
        }
    }

    copyarr(start: number, end: number) {
        let count = 0;
        for (let i = start; i < end; i++) {
            this.conpanyPage[count] = this.company[i];
            count++;
        }
    }
}
