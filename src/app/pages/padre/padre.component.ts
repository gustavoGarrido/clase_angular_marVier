import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  constructor() {
    console.log("Se ejecuta constructor")
  }

  procesaPropagar(mensaje:any){
    console.log("emision en padre", mensaje)
  }

  ngOnInit(): void {
    console.log("Se ejecuta ngOnInit")
  }

  ngAfterContentInit(){
    console.log("Se ejecuta ngAfterContentInit")
  }

  ngAfterViewInit(){
    console.log("Se ejecuta ngAfterViewInit")
  }

  ngOnDestroy(){
    console.log("se ejecuta ngOnDestroy")
  }



}
