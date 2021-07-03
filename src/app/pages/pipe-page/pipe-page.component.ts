import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-page',
  templateUrl: './pipe-page.component.html',
  styleUrls: ['./pipe-page.component.css']
})
export class PipePageComponent implements OnInit {

  constructor() { }

  pipeDate = new Date();
  pipeUpper = "texto en minuscula";
  pipeSlice = "123456789";
  pipeNumber = 3.141615;
  pipeCurrency = 30000;

  valorPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("llego tarde"), 3000)
  })

  estadoDb = 546465
  




  ngOnInit(): void {
  }

}
