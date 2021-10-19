import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './components/Cobo/menu-lateral/menu-lateral.component';
import { MenuHeaderComponent } from './components/Cobo/menu-header/menu-header.component';
import { IniciarSesionComponent } from './components/Cobo/iniciar-sesion/iniciar-sesion.component';
import { HomeDocentesComponent } from './components/Cobo/home-docentes/home-docentes.component';

import { UsuariosService } from './services/usuarios.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    MenuHeaderComponent,
    IniciarSesionComponent,
    HomeDocentesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
