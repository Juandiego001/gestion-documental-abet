import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IniciarSesionComponent } from './components/Cobo/iniciar-sesion/iniciar-sesion.component';
import { HomeDocentesComponent } from './components/Cobo/home-docentes/home-docentes.component';

// import {} from './components/'

const routes: Routes = [
  {
    path: '',
    component: IniciarSesionComponent
  },
  {
    path: 'home',
    component: HomeDocentesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
