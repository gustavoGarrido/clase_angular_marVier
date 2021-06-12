import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerPostRoutingModule } from './ver-post-routing.module';
import { VerPostComponent } from './ver-post.component';


@NgModule({
  declarations: [
    VerPostComponent
  ],
  imports: [
    CommonModule,
    VerPostRoutingModule
  ]
})
export class VerPostModule { }
