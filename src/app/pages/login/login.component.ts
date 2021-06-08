import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public fb: FormBuilder, private loginService:LoginService) { }

  formLogin = this.fb.group({
    email:["", [Validators.required, Validators.email]],
    password:["", Validators.required]
  });

  hacerLogin(){
    this.loginService.login(this.formLogin.value).subscribe(resp=>{
      console.log(resp)
    })
  }

  ngOnInit(): void {
  }

}
