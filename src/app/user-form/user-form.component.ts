import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
//added during wire up
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {

  registered = false;
	submitted = false;
  userForm: FormGroup;
  //added during wire up
  guid: string;
	serviceErrors:any = {};

  constructor(private formBuilder: FormBuilder, //added during wire up 
    private http: HttpClient, private router: Router)
  { 
    this.http.get('http://localhost:3000/api/v1/generate_uid').subscribe((data:any) => {
      this.guid = data.guid;
    }, error => {
        console.log("There was an error generating the proper GUID on the server", error);
    });
  }

  invalidFirstName()
  {
  	return (this.submitted && this.userForm.controls.first_name.errors != null);
  }

  invalidLastName()
  {
  	return (this.submitted && this.userForm.controls.last_name.errors != null);
  }

  invalidEmail()
  {
  	return (this.submitted && this.userForm.controls.email.errors != null);
  }

  invalidUsername()
  {
  	return (this.submitted && this.userForm.controls.username.errors != null);
  }

  invalidPassword()
  {
  	return (this.submitted && this.userForm.controls.password.errors != null);
  }

  ngOnInit()
  {
  	this.userForm = this.formBuilder.group({
      first_name: ['', [Validators.required, Validators.maxLength(50)]],
  		last_name: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(75)]],
      username: ['', Validators.required], 
  		password: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
  	});
  }

  onSubmit()
  {
  	this.submitted = true;

  	if(this.userForm.invalid == true)
  	{
  		return;
  	}
  	else
  	{
  		let data: any = Object.assign({guid: this.guid}, this.userForm.value);
  		this.http.post('http://localhost:3000/api/v1/customer', data).subscribe((data:any) => {
	      let path = '/user/' + data.customer.uid;

	      this.router.navigate([path]);
	    }, error =>
	    {
        console.log(error)
	    	this.serviceErrors = error.error.error;
        });

  		this.registered = true;

  	}
  }

};