import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Location } from '@angular/common';
import { Userarr } from 'src/app/core/models/userarr';
import { UserService } from 'src/app/core/services/user.service';


@Component({
  selector: 'app-mainadmin',
  templateUrl: './mainadmin.component.html',
  styleUrls: ['./mainadmin.component.scss']
})
export class MainadminComponent implements OnInit {

  userArr: Userarr;
  adminName: string;
  role: string;

  constructor(private location: Location, private authService: AuthService, public userService: UserService) { }


  logout() {
    this.authService.logout()
      .then((res) => {
        this.location.back();
      }, (error) => {
        console.log("Logout error", error);
      });
  }


  getUser() {
    new Promise(
      (resolve, reject) => {
        this.userService.getCurrentUser().then(user => {
          if (user) {
            this.userArr = { displayName: user.displayName, email: user.email, uid: user.uid };
            this.userService.getUser(user.uid).then(res => {
              this.role = res.role;
            })
            if (this.userArr.displayName != null) {
              this.adminName = this.userArr.displayName;
            }
            else {
              this.adminName = this.userArr.email.substring(0, this.userArr.email.lastIndexOf("@"));
            }

          }
        })
      }
    )
  }

  enterManagerZone() {
    this.userService.getCurrentUser().then(user => {
      if (user) {
        this.userService.enterToManagerZone(user);
      }
    })
  }



  ngOnInit(): void {
    this.getUser();
  }

}
