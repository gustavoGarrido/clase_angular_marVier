import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HijoComponent } from './hijo.component';



@NgModule({
  declarations: [
    HijoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HijoComponent
  ]
})
export class HijoModule { }
