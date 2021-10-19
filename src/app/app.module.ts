import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GruposAsignatura } from './components/Inti/GruposAsignatura';
import { prueba } from './components/prueba/prueba';
import { GrupoFiltrado } from './components/Inti/GrupoFiltrado/GrupoFiltrado';
import { componentMateria } from './components/Legarda/componentMateria';

@NgModule({
  declarations: [
    AppComponent,
    GruposAsignatura,
    prueba,
    GrupoFiltrado,
    componentMateria,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
