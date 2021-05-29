import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicioComponent } from './pages/pagina-inicio/pagina-inicio.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { UsuariosModule } from './pages/usuarios/usuarios.module';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';
import { LoginComponent } from './pages/login/login.component';

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
    path:"reactiveForm", component:ReactiveFormComponent
  },

  {
    path: 'usuarios', 
    loadChildren: () => import('src/app/pages/usuarios/usuarios.module').then(m => UsuariosModule)
  },
  {
    path:"login", component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
