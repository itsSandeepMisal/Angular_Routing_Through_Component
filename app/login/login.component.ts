import { Component, OnInit } from '@angular/core';
import { LoginServService } from '../login-serv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userid:string
  password:string
  constructor(public service:LoginServService, public router:Router) { 
    
  }

  ngOnInit() {
  }
  login(){
    this.service.login(this.userid, this.password)
    this.router.navigateByUrl("/home")
  }

}
