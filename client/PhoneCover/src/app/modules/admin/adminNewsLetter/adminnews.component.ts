import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/core/models/news';
import { NewsapiService } from 'src/app/core/services/newsapi.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalService } from 'src/app/core/services/local.service';


@Component({
  selector: 'app-adminnews',
  templateUrl: './adminnews.component.html',
  styleUrls: ['./adminnews.component.scss']
})
export class AdminnewsComponent implements OnInit {

  users: News[] = [];
  UsersForms: FormGroup;
  news: News;
  emailAlredy: string;
  emails: string[] = [];
  editDone:string;
  searchUser:News[]=[];
  showsearch:boolean = false;
  dialogTheme2:boolean;

  constructor(private newsApi: NewsapiService, private formBuilder: FormBuilder,private local:LocalService) { }




  removeUser(id) {
    this.newsApi.deleteNews(id).subscribe(ele => {
      this.users = this.users.filter(ele => ele.id != id);
   

    });
  }

  searchUsers(name){
    this.searchUser = [];
    if(name==""){
      this.showsearch = false;
      this.searchUser = [];
    }
    else{
      this.showsearch = true;
      let filter = name.toUpperCase();
 
      
      for(let i=0;i<this.users.length;i++){
        let temp = this.users[i].name;
        if(temp.toUpperCase().indexOf(filter) > -1){
          this.searchUser.push(this.users[i]);
        }
      }
    }
  }


  searchUsersByEmail(email){
    this.searchUser = [];
    if(email==""){
      this.showsearch = false;
      this.searchUser = [];
    }
    else{
      this.showsearch = true;
      let filter = email.toUpperCase();
     
      
      for(let i=0;i<this.users.length;i++){
        let temp = this.users[i].email;
        if(temp.toUpperCase().indexOf(filter) > -1){
          this.searchUser.push(this.users[i]);
        }
      }
    }
  }

  sortById(){
    this.users.sort(function(a, b) {
      return (a.id - b.id);
  }).sort(function(a, b) {
      return (a.id - b.id);
  });
  this.searchUser.sort(function(a, b) {
    return (a.id - b.id);
}).sort(function(a, b) {
    return (a.id - b.id);
});
  }

  
  sortByName(){
    this.users.forEach(element => {
      element.name = element.name.replace(/\s+/g, '');
    });
    this.users.sort((a, b) => a.name.localeCompare(b.name));
    this.searchUser.forEach(element => {
      element.name = element.name.replace(/\s+/g, '');
    });
    this.searchUser.sort((a, b) => a.name.localeCompare(b.name));
  }

  sortByEmail(){
    this.users.forEach(element => {
      element.email = element.email.replace(/\s+/g, '');
    });
    this.users.sort((a, b) => a.email.localeCompare(b.email.toString()));
    this.searchUser.forEach(element => {
      element.email = element.email.replace(/\s+/g, '');
    });
    this.searchUser.sort((a, b) => a.email.localeCompare(b.email.toString()));
    
  }

 editUser(f,id){
  this.news = {
    id:id,
    name: f.form.value.name,
   email: f.form.value.email
  }
  this.newsApi.editNews(this.news,id).subscribe(ele => {
  this.users.forEach(element => {
    if(element.id == id){
      element.name = f.form.value.name;
    }
    this.editDone="The changes have been saved";
  });

 })
}


getValues(name, email){
  this.UsersForms = this.formBuilder.group({
    name: [name, Validators.required],
    email: [email],


  });
  this.checkDialogTheme();
  console.log(this.dialogTheme2);
  

}

checkDialogTheme(){
  if(this.local.dialogTheme == true){
    this.dialogTheme2 = true;
  }else{
    this.dialogTheme2 = false;
  }
}


ngOnInit(): void {
  this.UsersForms = this.formBuilder.group({
    name: ["", Validators.required],
    email: [""],


  });
  this.newsApi.getAll().subscribe(ele => {
    this.users = ele;
   })
  
   
}


}
