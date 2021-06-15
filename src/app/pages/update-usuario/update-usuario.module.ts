import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateUsuarioRoutingModule } from './update-usuario-routing.module';
import { UpdateUsuarioComponent } from './update-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    UpdateUsuarioComponent
  ],
  imports: [
    CommonModule,
    UpdateUsuarioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class UpdateUsuarioModule { }
