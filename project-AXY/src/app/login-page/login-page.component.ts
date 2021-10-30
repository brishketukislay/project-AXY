import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CommonServicesService} from '../common-services.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {
userList:any;

loginForm = new FormGroup({
  emailFormControl : new FormControl('', [
    Validators.required,
    Validators.email,
  ]),
  pwdFormControl: new FormControl('',[
    Validators.required,
    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,16}') 
  ])
})
  constructor(private router: Router, private commonServicesService:CommonServicesService) { }

  ngOnInit(): void {
    this.getUserList();
  }
  get emailFormControl(){
    return this.loginForm.get('emailFormControl');
  }
  get pwdFormControl(){
    return this.loginForm.get('pwdFormControl');
  }
  getUserList(){
    this.commonServicesService.getUserList().subscribe((data)=>{
      this.userList = data;
    })
  }
  onSubmit(){
    const email = this.loginForm.get('emailFormControl')?.value;
    if( this.userList){
    if(this.loginForm.valid){
      this.userList.forEach((element: any) => {
        if(email === element.email){
          this.router.navigate(["dashboard"]);
          sessionStorage.setItem('loggedIn', 'true');
        }
      });
    }
  }
  }
  buttonStatus(){
    if(this.loginForm.valid){
      return false;
    }
    else{
      return true;
    }
  }
}
