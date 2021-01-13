import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  dialogTheme:boolean;

  constructor() { }
 
  saveObjToStorage(obj){
    localStorage.setItem('coverPhoneProjectThemeDark', JSON.stringify(obj));
  }

  saveCoverToStorage(obj1){
    localStorage.setItem('coverPhoneProjectCoverToCart', JSON.stringify(obj1));
  }

  saveHistoryToStorage(obj2){
    localStorage.setItem('coverPhoneProjectToHistory', JSON.stringify(obj2));
  }

  getObjFromStorage(){
    return JSON.parse(localStorage.getItem('coverPhoneProjectThemeDark'))
  }

  getCoverFromStorage(){
    return JSON.parse(localStorage.getItem('coverPhoneProjectCoverToCart'))
  }

  getHistoryFromStorage(){
    return JSON.parse(localStorage.getItem('coverPhoneProjectToHistory'))
  }

  removeObjFromStorage(){
    localStorage.removeItem('coverPhoneProjectThemeDark');
  }

  removeCoverFromStorage(){
    localStorage.removeItem('coverPhoneProjectCoverToCart');
  }

  removeHistoryFromStorage(){
    localStorage.removeItem('coverPhoneProjectToHistory');
  }



}

