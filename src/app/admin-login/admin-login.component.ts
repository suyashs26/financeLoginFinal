import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private _router:Router) { }
  loginForm:FormGroup;
  userName:5555;
  password:"HRA@5555";

  ngOnInit(): void {
    this.loginForm= new FormGroup({
      email:new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)])

    });
    this.adminLogin();


  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  submitLogin(form:FormGroup){
    console.log(form.valid);
    console.log("email ", form.value.email);
    console.log("password ",form.value.password);
  }
  admin_register(){}
  adminLogin(){
  if(this.userName && this.password){
    this._router.navigate(['/admin-page']);
  }
  else{
    alert("Wrong Credentials");
    this._router.navigate(['/admin-login']);
  }
}
  
}
