import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicioComponent } from './pages/pagina-inicio/pagina-inicio.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { UsuariosModule } from './pages/usuarios/usuarios.module';

const routes: Routes = [
  {
    path:"paginaInicio", 
    component: PaginaInicioComponent,
    children:[
      {
        path:"contactenos",
        component: ContactenosComponent
      }
    ]
  },

  {
    path: 'usuarios', 
    loadChildren: () => import('src/app/pages/usuarios/usuarios.module').then(m => UsuariosModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
