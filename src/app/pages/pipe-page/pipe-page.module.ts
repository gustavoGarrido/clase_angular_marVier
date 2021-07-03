import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipePageRoutingModule } from './pipe-page-routing.module';
import { PipePageComponent } from './pipe-page.component';
import { CommondModule } from 'src/app/pipes/commond/commond.module';


@NgModule({
  declarations: [
    PipePageComponent
  ],
  imports: [
    CommonModule,
    PipePageRoutingModule,
    CommondModule
  ]
})
export class PipePageModule { }
