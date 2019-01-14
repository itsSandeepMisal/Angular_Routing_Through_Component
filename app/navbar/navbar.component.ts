import { Component, OnInit } from '@angular/core';
import { LoginServService } from '../login-serv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public service:LoginServService, public router:Router) { }

  ngOnInit() {
  }

  logout(){
    this.service.loginId=-1
    this.router.navigateByUrl("/login")
  }

}