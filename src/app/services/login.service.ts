import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IrepBackend from '../interfaces/IrespBackend';
import { environment } from 'src/environments/environment';
import { timeout } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  rutaApi:string = environment.urlApi;
  time_out= 50000

  login(loginForm:{}){
    return this.http.post<IrepBackend>(`${this.rutaApi}/users/login`, loginForm)
                    .pipe(
                      timeout(this.time_out)
                    )
  }  

}
