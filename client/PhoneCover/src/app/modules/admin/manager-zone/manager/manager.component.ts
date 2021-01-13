import { Component, OnInit } from '@angular/core';
import { UserWithRole } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Userarr } from 'src/app/core/models/userarr';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  admins: UserWithRole[] = [];
  userArr: Userarr;
  adminName: string;



  constructor(private userService: UserService, private afs: AngularFirestore) { }

  gatAllAdmins() {
    this.afs.collection<UserWithRole>('users').valueChanges().subscribe(users => {
    this.admins = users;
    this.admins = this.admins.filter(ele => ele.role != 'user');
     }
    )
  }
  

  getUser() {
    new Promise(
      (resolve, reject) => {
        this.userService.getCurrentUser().then(user => {
          if (user) {
            this.userArr = { displayName: user.displayName, email: user.email, uid: user.uid };
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

  changeRoleToManager(user, role: string) {
    this.afs.collection('users').doc(user.uid).set({ displayName: user.displayName, provider: user.provider, role: role, uid: user.uid }).then(res => {
    })
  }

  changeRoleToAdmin(user, role: string) {
    this.afs.collection('users').doc(user.uid).set({ displayName: user.displayName, provider: user.provider, role: role, uid: user.uid }).then(res => {

    })
  }

  removeUser(uid) {
    this.afs.collection('users').doc(uid).delete().then(res => {
      this.admins = this.admins.filter(ele => ele.uid != uid);
    })
  }

  ngOnInit(): void {
    this.getUser();
    this.gatAllAdmins();
    



  }

}
