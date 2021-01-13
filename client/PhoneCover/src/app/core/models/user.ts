export class User {
    image: string;
    name: string;
    provider: string;
 
  
    constructor(){
      this.image = "";
      this.name = "";
      this.provider = "";
    }
  }


  export class UserWithRole {
    displayName:string;
    provider:string;
    uid:string;
    role:string;
  }