import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-envia',
  templateUrl: './page-envia.component.html',
  styleUrls: ['./page-envia.component.css']
})
export class PageEnviaComponent implements OnInit {

  constructor(public router:Router) { }

  datos ={
    nombre:"gustavo",
    apellido: "garrido",
    dni:11111,
    tipo_doc: "dni"
  }

  enviarDatos(){
    const jsonToString = JSON.stringify(this.datos)
    this.router.navigate([`/paginaRecibe/${jsonToString}`]);
  }

  ngOnInit(): void {
  }

}
