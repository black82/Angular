import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClientServiceService} from '../../service/httpclient/clientService.service';

@Component({
    selector: 'app-colecttoweb',
    templateUrl: './colecttoweb.component.html',
    styleUrls: ['./colecttoweb.component.css']
})
export class ColecttowebComponent implements OnInit {
    formweb: FormGroup;

    constructor(private fb: FormBuilder, private client: ClientServiceService) {
    }

    ngOnInit() {
        this.createForm();
        this.formweb.get('web').setValue('');
    }

    colectWeb() {
        console.log(this.formweb.controls.web.value);
        this.client.colecttoweb(this.formweb.controls.web.value).subscribe(
            fin => {
                console.log(fin);
            }, error => {
            }
        );
    }

    createForm() {
        this.formweb = this.fb.group({
            web: [{value: null},
                [
                    Validators.required,
                    Validators.nullValidator,
                    Validators.pattern('^[0-9]*$')
                ]
            ]
        });
    }

    stopcolect() {
        this.client.stopCollect().subscribe(stope =>
            console.log(stope + 'stop'));
    }
}
