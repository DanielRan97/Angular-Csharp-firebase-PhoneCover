import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { UserWithRole } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public db: AngularFireAuthModule, public fbAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) { }

  checkIfUserHasRole(user) {
    this.getUser(user.uid).then(res => {
      if (res) {
        if (res.role === "admin" || res.role === "manager") {
          this.router.navigate(['admin/mainAdmin'])
        }
        else {
          this.router.navigate(['admin/noPremission'])
        }
      }
      else {
        let newUser: UserWithRole = { uid: user.uid, role: "user", displayName: user.displayName, provider: user.providerData[0].providerId };
        this.afs.doc(`users/${user.uid}`).set(newUser, { merge: true }).then(res => {
          this.router.navigate(['admin/noPremission'])
        })
      }
    })
  }

  enterToManagerZone(user) {
    this.getUser(user.uid).then(res => {
      if (res) {
        if (res.role === "manager") {
          this.router.navigate(['admin/manager'])
        }
        else {
          this.router.navigate(['admin/mainAdmin'])
        }
      }
    })
  }


  getUser(uid) {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection<any>('users').doc(uid).valueChanges().subscribe(res => {
        resolve(res);
      }, err => {
        reject(err)
      })
    })
  }


  getCurrentUser() {
    return new Promise<any>(
      (resolve, reject) => {
        const user = firebase.auth().onAuthStateChanged((user) => {
          user ? resolve(user) : resolve(null);
        })
      }
    )
  }

  resetPassword(email) {
    return new Promise<any>((resolve, reject) => {
      let auth = firebase.auth();
      auth.sendPasswordResetEmail(email).then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }

  updateCurrentUser(value) {
    return new Promise<any>((resolve, reject) => {
      var user = firebase.auth().currentUser;
      console.error(value)

      user.updateProfile({
        displayName: value.name,
        photoURL: value.photoURL
      }).then(res => {
        resolve(res);
        console.error(res)

      }, err => reject(err))
    })
  }


}