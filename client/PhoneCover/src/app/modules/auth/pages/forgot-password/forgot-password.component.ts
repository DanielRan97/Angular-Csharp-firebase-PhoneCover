import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  resetStatus:string ='';

  constructor(public authService: AuthService,
    private fb: FormBuilder,
    private userService:UserService) {   
       this.createForm();
      }

      forgotPasswordForm: FormGroup;
    errorMessage: string = '';
    successMessage: string = '';



 createForm() {
     this.forgotPasswordForm = this.fb.group({
       email: [''],
     });
   }


  resetPassword(email){
    console.log(email)
    this.userService.resetPassword(email).then(res => {
      this.resetStatus = "A mail with reset password instructions was sent to your email!";
    }, err => {
      this.resetStatus = err;
    })
  }

  ngOnInit(): void {
  }
}
