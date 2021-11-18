import { CUSTOM_ELEMENTS_SCHEMA, NgModule, TemplateRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuLateralComponent } from './components/Cobo/menu-lateral/menu-lateral.component';
import { MenuHeaderComponent } from './components/Cobo/menu-header/menu-header.component';
import { IniciarSesionComponent } from './components/Cobo/iniciar-sesion/iniciar-sesion.component';
import { HomeDocentesComponent } from './components/Cobo/home-docentes/home-docentes.component';
import { GruposAsignatura } from './components/Inti/GruposAsignatura';
import { prueba } from './components/prueba/prueba';
import { GrupoFiltrado } from './components/Inti/GrupoFiltrado/GrupoFiltrado';
import { componentMateria } from './components/Legarda/componentMateria';
import {Grupito} from './components/Inti/Grupito/Grupito';
import { filtromateria } from './components/Legarda/filtromateria/filtromateria';
import { Materiafiltrada } from './components/Legarda/MateriaFiltrada/MateriaFiltrada';
import { EvidenciasComponent } from './components/Moya/evidencias/evidencias.component';
import { CarpetaEvidenciaComponent } from './components/Moya/carpetaEvidencia/carpetaEvidencia.component';
import { EvidenciaComponent } from './components/Moya/evidencia/evidencia.component';

import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonModule } from "@angular/material/button";
import { MatSortModule } from '@angular/material/sort';

// Para el componente dinámico
import { ComponentMateriaDirective } from './components/Legarda/componentMateria.directive'

// Services
import { UsuariosService } from './services/usuario/usuario.service';

// CookieService
import { CookieService } from 'ngx-cookie-service';

// Guards
import { UsuarioGuard } from './guards/usuario.guard';

// Interceptors
import { JwtInterceptorInterceptor } from './interceptors/jwt-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    MenuHeaderComponent,
    IniciarSesionComponent,
    HomeDocentesComponent,
    GruposAsignatura,
    prueba,
    GrupoFiltrado,
    componentMateria,
    Grupito,
    filtromateria,
    Materiafiltrada,
    ComponentMateriaDirective,
    EvidenciasComponent,
    CarpetaEvidenciaComponent,
    EvidenciaComponent
  ],
  entryComponents: [
    componentMateria,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatSortModule
  ],
  providers: [
    UsuariosService,
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
