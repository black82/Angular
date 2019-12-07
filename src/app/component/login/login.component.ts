import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ClientServiceService} from '../../service/httpclient/clientService.service';
import {ErrorStateMatcher} from '@angular/material/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email = '';
  password = '';
  matcher = new MyErrorStateMatcher();
  isLoadingResults = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: ClientServiceService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group(
      {
        email: [{value: null},
          [
            Validators.required,
            Validators.nullValidator,
            Validators.pattern('/^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.]{3,9})+\\.([A-Za-z]{2,4})$/'),
          ]],
        password: [null, Validators.required
        ]
      });
  }


  onFormSubmit(form
                 :
                 NgForm
  ) {
    this.authService.login(form)
      .subscribe(res => {
        console.log(res);
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.router.navigate(['']);
        }
      }, (err) => {
        console.log(err);
      });
  }

  register() {
    this.router.navigate(['register']);
  }
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher
  implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}