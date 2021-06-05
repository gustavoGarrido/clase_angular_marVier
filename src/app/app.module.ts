import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginaInicioComponent } from './pages/pagina-inicio/pagina-inicio.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { TokenBakendInterceptor } from './services/token-bakend.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    PaginaInicioComponent,
    ContactenosComponent,
    ReactiveFormComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenBakendInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
