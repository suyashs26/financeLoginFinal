import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  //show hide div variables
  
  //Buttons clicks functionalities 
  constructor() { }
  registerForm:FormGroup;

  ngOnInit(): void {
    this.registerForm= new FormGroup({
      name:new FormControl('', [Validators.required, Validators.minLength(4),Validators.pattern(/^[a-zA-Z\s]*$/)]),
      dob: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required, Validators.pattern(/^[789]\d{9}$/)]),
      username: new FormControl('', [Validators.required, Validators.minLength(6)]),
      email:new FormControl('', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
      address: new FormControl('',[Validators.required]),
      bankName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern(/^[a-zA-Z\s]*$/)]),
      bankNumber: new FormControl('', [Validators.required, Validators.pattern(/^\d{9,18}$/)]),
      ifsc: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]{4}[a-zA-Z0-9]{7}$/)]),
      cb: new FormControl('', [Validators.requiredTrue])


    },
    this.checkPasswords 
    );


  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value
    return pass === confirmPass ? null : { notSame: true }
  }


  user_login()
  {
    
  }
  admin_login(){

  }
  
}
