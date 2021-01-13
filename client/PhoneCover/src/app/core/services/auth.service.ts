import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase'
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fbAuth: AngularFireAuth) { }

  facebookLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      this.fbAuth.signInWithPopup(provider)
      .then(res => {
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      })
    })
 }

 googleLogin() {
  return new Promise<any>((resolve, reject) => {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    this.fbAuth.signInWithPopup(provider).then(
      data => {
        resolve(data)
      },
      err => {
        reject(err)
      }
    )
  })
}

  register(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        return res.user.updateProfile({
          displayName: value.displayName,
        }).then(res=> {
          this.SendVerificationMail(value.email); 
          resolve(res)
        })
      }, err => reject(err))
    })
  }

  SendVerificationMail(email) {
    let actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be whitelisted in the Firebase Console.
      url: 'https://www.edenik.com/firebase/user',
      handleCodeInApp: true
    };
    return this.fbAuth.sendSignInLinkToEmail(email, actionCodeSettings)
      .then(() => {
      })
      .catch(function (error) {
        console.log(error)
      });
  }

  login(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }


  logout() {
    return new Promise(
      (resolve, reject) =>{
        if(firebase.auth().currentUser){
          this.fbAuth.signOut();
          resolve(true);
        }
        else{
          reject('user not found');
        }
      }
    )

  }

}


