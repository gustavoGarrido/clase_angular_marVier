import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IrepBackend from '../interfaces/IrespBackend';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  rutaApi:string = "http://localhost:3000" 

  login(loginForm:{}){
    return this.http.post<IrepBackend>(`${this.rutaApi}/users/login`, loginForm)
  }  

}
