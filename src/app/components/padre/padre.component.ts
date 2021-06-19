import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  constructor() { }

  datoBakend:any = 0;

  datoDelHijoAlPadre:string=""

  consultarDatosBakend(){
    this.datoBakend = {nombre: "gustavo", apellido:"garrido"};
  }

  procesarPropagar(event:any){
    console.log("console log emitido en padre:", event )
    this.datoDelHijoAlPadre = event
  }

  ngOnInit(): void {
  }

}
