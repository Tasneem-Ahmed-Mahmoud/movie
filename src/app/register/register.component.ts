import { Component ,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

error:string=""

registerForm:FormGroup=new FormGroup({
first_name:new FormControl(null,[Validators.required,Validators.maxLength(10),Validators.minLength(3)]),
last_name:new FormControl(null,[Validators.required,Validators.maxLength(10),Validators.minLength(3)]),
email:new FormControl(null,[Validators.required,Validators.email]),
age:new FormControl(null,[Validators.required,Validators.min(16),Validators.max(60 )]),
password:new FormControl(null,[Validators.required,Validators.pattern(`^[A-Z][a-z]{6,16}$`)]),
})

constructor(private authService:AuthService , private router:Router){}


ngOnInit(): void {

}


submitRegisterForm(registerForm:FormGroup){
  console.log(registerForm)

if(registerForm.valid){
  this.router.navigate(['/login'])
//   this.authService.register(this.registerForm.value).subscribe((response)=>{

//     if(response.message=="success"){
// //go to login

// this.router.navigate(['/login'])
//     }else{
// this.error=response.errors.email.message
//     }
//
 //}
 // )

}
}






}
