import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {
  @ViewChild('containerCerrarSesion') containerCerrarSesion: ElementRef = new ElementRef(HTMLDivElement);

  // Variable que controlará el mostrar o no
  // el contenedor de cerrar sesión.
  boolMostrar: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  cerrarSesion(): void {

  }

  toggleMostrar(): void {
    this.boolMostrar = !this.boolMostrar;
  }

}
