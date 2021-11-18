import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GruposAsignatura } from './components/Inti/GruposAsignatura';
import { GrupoFiltrado } from './components/Inti/GrupoFiltrado/GrupoFiltrado';

import { filtromateria } from './components/Legarda/filtromateria/filtromateria';
import { Materiafiltrada } from './components/Legarda/MateriaFiltrada/MateriaFiltrada';

import { IniciarSesionComponent } from './components/Cobo/iniciar-sesion/iniciar-sesion.component';
import { HomeDocentesComponent } from './components/Cobo/home-docentes/home-docentes.component';

import { EvidenciaComponent } from "./components/Moya/evidencia/evidencia.component";
import { EvidenciasComponent } from "./components/Moya/evidencias/evidencias.component";

import { Reporte } from './components/Inti/Reporte/Reporte';
import { ReporteGeneradoComponent } from './components/Cobo/reporte-generado/reporte-generado.component';

import { UsuarioGuard } from './guards/usuario.guard';

const routes: Routes = [
  {
    path: '',
    component: IniciarSesionComponent
  },
  {
    path: 'home',
    component: HomeDocentesComponent,
    canActivate: [UsuarioGuard]
  },
  {
    path: 'Grupo',
    component: GruposAsignatura
  },
  {
    path:'GrupoFiltrado',
    component: GrupoFiltrado
  },
  {
    path: 'filtromateria',
    component: filtromateria
  },
  {
    path:'MateriaFiltrada',
    component: Materiafiltrada
  },
  {
    path: 'evidencia',
    component: EvidenciaComponent
  },
  {
    path: 'evidencias',
    component: EvidenciasComponent
  },
  {
    path: 'reporte', 
    component: Reporte,
  },
  {
    path: 'reporte-generado',
    component: ReporteGeneradoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
