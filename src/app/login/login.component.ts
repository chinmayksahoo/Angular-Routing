import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:LoginService, private router:Router) { 

  }

  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    username:new FormControl('',[Validators.required]),
    // username:new FormControl('Chinmay', Validators.required),
    // username:new FormControl(''),
    password:new FormControl('',[Validators.required])
  })

  get username(){
    return this.loginForm.get('username')
  }

  get password(){
    return this.loginForm.get('password')
  }

  user = this.loginForm.get('username')
  pass = this.loginForm.get('password')
  onSubmitLogin(){
    // if(this.loginForm.invalid){
    //   alert('Validation Failed')
    // }
    let user = this.loginForm.get('username').value
    let password = this.loginForm.get('password').value
    console.log(user + password)
    // alert(JSON.stringify(this.loginForm.value))
  }
  
  SignIn(){
    // console.log(this.user.value + ' ' + this.pass.value)
    this.service.validateUser(this.user.value, this.pass.value)
    // this.service.isAuthenticated()
    this.router.navigate(['../dashboard'])
  }
  
}
