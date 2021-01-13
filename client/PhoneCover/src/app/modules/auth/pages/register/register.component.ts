import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public authService: AuthService,
    private router: Router,
    private userService:UserService,
    private fb: FormBuilder) {
    this.createForm();
  }

  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';


  ngOnInit(): void {
  }
  createForm() {
    this.registerForm = this.fb.group({
      email: ['',],
      password: ['', Validators.required]
    });
  }


  tryRegister(value) {
    this.authService.register(value)
      .then(res => {
        console.log(res);
        this.errorMessage = "";
        this.successMessage = "Your account has been created";

        setTimeout(() => {
           this.router.navigate(['auth']);
        }, 1500);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = "";
      })
  }

}