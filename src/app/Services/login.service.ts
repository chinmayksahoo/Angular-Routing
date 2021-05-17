import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Login from '../login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  log:Login = new Login()
  logindata:Array<Login> = [];

  constructor(private client:HttpClient) { 

  }
  
  SignInData():Observable<Array<Login>>{
    return this.client.get<Array<Login>>("http://localhost:3000/LoginData")
  }
  
  SignUp(log:Login):Observable<Login>{
    return this.client.post<Login>("http://localhost:3000/LoginData",log)
  }

  validateUser(username:string, password:string){
    this.SignInData().subscribe(logs=>{
      this.logindata = logs
    },error=>console.error(error)
    );
    for (let i of this.logindata){
      if(i.Name === username && i.Password === password){
        localStorage.setItem("token","loggedin")
        break;
      }
      else{
        localStorage.setItem("token","notloggedin")
      }
    }
  }

  isAuthenticated(){
    return localStorage.getItem("token") == "loggedin";
  }
}
