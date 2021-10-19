import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GruposAsignatura } from './components/Inti/GruposAsignatura';
import { GrupoFiltrado } from './components/Inti/GrupoFiltrado/GrupoFiltrado';

const routes: Routes = [
  { path: 'Grupo', component: GruposAsignatura},
  {path:'GrupoFiltrado', component: GrupoFiltrado},
  //rregla de ruteo basico
  {path:'', redirectTo:'/Grupo', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
