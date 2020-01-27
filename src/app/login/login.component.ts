import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Title } from "@angular/platform-browser";
import { AuthenticationService } from '../services/authentication.service';
import { UserInfoModel } from '../models/userinfomodel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    serviceErrors: any = {};

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private http: HttpClient,
    private title: Title) { }



  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  // reset login status
  this.authenticationService.logout();

  // get return url from route parameters or default to '/'
  // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/user/:' + this.f.username.value;//this needs to somehow render into the other function

    this.title.setTitle('Quick Slants')
}
// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }

// onSubmit() {
//     this.submitted = true;

//     // stop here if form is invalid
//     if (this.loginForm.invalid) {
//         return;
//     }

//     this.loading = true;
//     this.authenticationService.login(this.f.username.value, this.f.password.value)
//         .pipe(first())
//         .subscribe(
//             data => {
//                 this.router.navigate([this.returnUrl]);
//             },
//             error => {
//                 this.error = error;
//                 this.loading = false;
//             });
// }

onSubmit() {
  this.submitted = true;

  if (this.loginForm.invalid == true) {
    return;
  } else {
    let data: any = Object.assign({}, this.loginForm.value);
    console.log(data);
    let data2 = {
      username: data.username,
      password: data.password
    };
    console.log(data2);
    this.http.post("/api/v1/customer/login", data2).subscribe(
      (data: any) => {
        let path = "/user/" + data.customer.uid;
        console.log(path);

        this.router.navigate([path]);
      },
      error => {
        console.log(error);
        this.serviceErrors = error.error.error;
      }
    );

  }
}
}

