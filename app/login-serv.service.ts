import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServService {
  loginId:number
  constructor() {
    this.loginId=-1
   }
   login(loginid:string, password:string){
    if(loginid=="admin" && password=="admin")
      this.loginId=1
    else
      this.loginId=0
   }
}
