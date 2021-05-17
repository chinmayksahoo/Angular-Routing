import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Login from '../login';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  temail:string;
  tname:string;

  log:Login = new Login();
  logs:Array<Login> = [];

  constructor(private activatedRoute:ActivatedRoute, private fb:FormBuilder, private reg:LoginService) { 
    this.temail = this.activatedRoute.snapshot.paramMap.get('email')
    this.tname = this.activatedRoute.snapshot.paramMap.get('name')
  }

  ngOnInit(): void {
  }

  registerForm = this.fb.group({
    iemail:[,[Validators.required, Validators.email]],
    loginname:[,Validators.required],
    password:[,[Validators.required, Validators.minLength(8), Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]],
    rpassword:[,[Validators.required]]
  })
  
  get loginname(){
    return this.registerForm.get('loginname')
  }

  get iemail(){
    return this.registerForm.get('iemail')
  }

  get password(){
    return this.registerForm.get('password')
  }

  get rpassword(){
    return this.registerForm.get('rpassword')
  }

  onSignUp(){
    // if(this.registerForm.invalid){
    //   alert('Validation Failed')
    // }
    // else{
    //   alert(JSON.stringify(this.registerForm.value))
    // }
    this.reg.SignUp(this.log).subscribe(
      item=>{console.log(item)},
      error=>{console.log(error)}
    );
    this.logs.push(this.log)
    this.log = new Login()
    // alert(JSON.stringify(this.registerForm.value))
    
  }
  checkPasswords() {
    return this.password.value === this.rpassword.value ? null : { notSame: true }     
  }
}
