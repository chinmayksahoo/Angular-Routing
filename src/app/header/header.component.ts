import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { noop } from 'rxjs';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  login:string = ""

  constructor(private router:Router, private ser:LoginService) { }

  ngOnInit(): void {
  }

  get switch(){
    return this.ser.isAuthenticated()
  }
  
  Login(){
    this.router.navigate(['login'])
  }

  Register(){
    this.router.navigate(['register'])
  }

  Logout(){
    var ans = window.confirm("Do You want to Logout")
    if (ans){
      this.router.navigate([''])
      localStorage.clear();
    }
    else{
      noop
    }
    
  }

}
