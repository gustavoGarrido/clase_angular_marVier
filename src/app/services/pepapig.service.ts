import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PepapigService {

  constructor() { }

  getDataPepapig(){
    return ["Pedro poni", "Madame gazelle", "dani dog"]
  }
}
