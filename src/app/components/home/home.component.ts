import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  nombreUsuario: string = '';
  contrasena: string = '';
  
  constructor() {
  }

  ngOnInit(): void {
  }

  iniciarSesion(e: Event): void {
    e.preventDefault();
  }

}
