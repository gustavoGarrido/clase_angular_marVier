import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


const token_key:string = "token"

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

  authState = new BehaviorSubject(false);

  authenticate(){
    this.authState.next(true)
  }

  isAutehnticate(){
    return this.authState.value
  }

  logoaut(){
    localStorage.removeItem(token_key); // preguntar por que usar removeItem en lugar de clear
    this.authState.next(false);
  }

  checktoken(){
    const token = localStorage.getItem(token_key)
    if(token){
      this.authState.next(true)
    }
  }

  
}
