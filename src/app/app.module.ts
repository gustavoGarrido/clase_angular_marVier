import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PaginaInicioComponent } from './pages/pagina-inicio/pagina-inicio.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicioComponent,
    ContactenosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
