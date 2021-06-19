import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  constructor() { }

  @Input() id_producto=10;

  @Output() propagar = new EventEmitter<string>();

  onPropagar(){
    this.propagar.emit("Evento emitido")
  }

  ngOnInit(): void {
    console.log(this.id_producto)
  }


}
