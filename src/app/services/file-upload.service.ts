import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) { }

  rutaApi = environment.urlApi

  sendFile(imagen:FormData){
    return this.http.post(`${this.rutaApi}/post/upload`, imagen,{})
  }

}
