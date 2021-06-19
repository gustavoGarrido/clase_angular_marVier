import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageEnviaRoutingModule } from './page-envia-routing.module';
import { PageEnviaComponent } from './page-envia.component';


@NgModule({
  declarations: [
    PageEnviaComponent
  ],
  imports: [
    CommonModule,
    PageEnviaRoutingModule
  ]
})
export class PageEnviaModule { }
