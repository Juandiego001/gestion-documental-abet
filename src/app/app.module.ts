import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GruposAsignatura } from './components/Inti/GruposAsignatura';
import { prueba } from './components/prueba/prueba';
import { GrupoFiltrado } from './components/Inti/GrupoFiltrado/GrupoFiltrado';
import { componentMateria } from './components/Legarda/componentMateria';
import {Grupito} from './components/Inti/Grupito/Grupito';
import { filtromateria } from './components/Legarda/filtromateria/filtromateria'; 
import { Materiafiltrada } from './components/Legarda/MateriaFiltrada/MateriaFiltrada';

@NgModule({
  declarations: [
    AppComponent,
    GruposAsignatura,
    prueba,
    GrupoFiltrado,
    componentMateria,
    Grupito,
    filtromateria,
    Materiafiltrada,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
