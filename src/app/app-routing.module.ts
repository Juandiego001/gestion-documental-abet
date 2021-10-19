import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GruposAsignatura } from './components/Inti/GruposAsignatura';
import { GrupoFiltrado } from './components/Inti/GrupoFiltrado/GrupoFiltrado';
import { filtromateria } from './components/Legarda/filtromateria/filtromateria';
import { Materiafiltrada } from './components/Legarda/MateriaFiltrada/MateriaFiltrada';

const routes: Routes = [
  { path: 'Grupo', component: GruposAsignatura},
  {path:'GrupoFiltrado', component: GrupoFiltrado},
  { path: 'filtromateria', component: filtromateria},
  {path:'MateriaFiltrada', component: Materiafiltrada},
  //rregla de ruteo basico
  {path:'', redirectTo:'/filtromateria', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
