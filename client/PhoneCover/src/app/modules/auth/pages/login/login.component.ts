import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router:Router, private userService:UserService,
    private fb:FormBuilder) {
    this.createForm();

    }
    loginForm: FormGroup;
    errorMessage: string = '';
    resetStatus:string = '';
    createForm() {
      this.loginForm = this.fb.group({
        email: [''],
        password: ['',Validators.required]
      });
    }

 
  tryFacebookLogin(){
    this.authService.facebookLogin()
    .then(res => {
      this.userService.checkIfUserHasRole(res.user)
      
    })
  }


  tryGoogleLogin(){
    this.authService.googleLogin()
    .then(res => {
      this.userService.checkIfUserHasRole(res.user)
      
    })
  }

  tryLogin(value){
    this.authService.login(value)
    .then(res => {
      this.userService.checkIfUserHasRole(res.user)
      
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    })
  }

  ngOnInit(): void {
  }
}