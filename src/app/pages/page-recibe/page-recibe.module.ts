import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRecibeRoutingModule } from './page-recibe-routing.module';
import { PageRecibeComponent } from './page-recibe.component';


@NgModule({
  declarations: [
    PageRecibeComponent
  ],
  imports: [
    CommonModule,
    PageRecibeRoutingModule
  ]
})
export class PageRecibeModule { }
