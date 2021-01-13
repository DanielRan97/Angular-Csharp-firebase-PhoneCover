import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from "@angular/router";
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable()
export class UserResolver implements Resolve<User> {

  constructor(public userService: UserService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot) : Promise<User> {

    let user = new User();

    return new Promise((resolve, reject) => {
      this.userService.getCurrentUser()
      .then(res => {
        if(res==null){
            this.router.navigate(['/auth/login']);
            return reject();
        }
        else if(res.providerData[0].providerId == 'password'){
            console.error(res)
            if(res.providerData[0].photoURL!=null){
                user.image = res.providerData[0].photoURL;
            }
            else {
                user.image = 'https://via.placeholder.com/400x300';
            }
          user.name = res.displayName;
          user.provider = res.providerData[0].providerId;
          return resolve(user);
        }
        else{
          user.image = res.photoURL;
          user.name = res.displayName;
          user.provider = res.providerData[0].providerId;
          return resolve(user);
        }
      }, err => {
        this.router.navigate(['/login']);
        return reject(err);
      })
    })
  }
}