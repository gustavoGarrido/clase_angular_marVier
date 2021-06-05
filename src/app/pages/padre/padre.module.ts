import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PadreRoutingModule } from './padre-routing.module';
import { PadreComponent } from './padre.component';
import { HijoModule } from '../../components/hijo/hijo.module';




@NgModule({
  declarations: [
    PadreComponent,
  ],
  imports: [
    CommonModule,
    PadreRoutingModule,
    HijoModule
  ]
})
export class PadreModule { }
