import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  login(loginForm:{}){
    return this.http.post('http://localhost:3000/users/login',loginForm)
  }
}
