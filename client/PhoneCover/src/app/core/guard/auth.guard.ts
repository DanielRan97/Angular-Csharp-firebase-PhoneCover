import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree , Router} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private AuthService:AuthService, private router:Router, private UserService:UserService){}

  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any>{
      return new Promise(
        (resolve,reject) => {
          this.UserService.getCurrentUser().then(user => {
            if(user){
              return resolve(true);
            }
            else{
              this.router.navigate(['']);
              return resolve(false);
            }
          })
        }
      )
    }
    
  }
    
