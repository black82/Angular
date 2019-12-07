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
  hidemeWaitCursor = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: ClientServiceService) {
  }

  ngOnInit() {

    this.loginForm = this.formBuilder.group(
      {
        email: [null,
          [
            Validators.required,
            Validators.email
          ]],
        password: [null,
          Validators.required,
        ]
      });
    this.loginForm.get('email').setValue(' ');
  }

  onFormSubmit(form: NgForm) {
    this.hidemeWaitCursor = true;
    this.authService.login(form)
      .subscribe(res => {
        console.log('++++++++login+++++++++++');
        if (res.token) {
          this.hidemeWaitCursor = false;
          localStorage.setItem('token', res.token);
          this.router.navigate(['']).then(r => r);
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
    return !!(control
      && control.invalid
      && (control.dirty
        || control.touched ||
        isSubmitted));
  }
}
