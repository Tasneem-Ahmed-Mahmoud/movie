import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
error :string=''
loginForm:FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email]),

  password:new FormControl(null,[Validators.required,Validators.pattern(`^[A-Z][a-z]{6,16}$`)]),
})

constructor(private router:Router ,private authService:AuthService ){}




submitRegisterForm(loginForm:FormGroup){
  console.log(loginForm)

if(loginForm.valid){
  this.router.navigate(['/home'])
  this.authService.login(this.loginForm.value).subscribe((response)=>{

    if(response.message=="success"){
//go to login

this.router.navigate(['/home'])
    }else{
this.error=response.errors.email.message
    }

 }
 )

}
}

}
