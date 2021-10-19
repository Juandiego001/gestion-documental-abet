import { asNativeElements, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-docentes',
  templateUrl: './home-docentes.component.html',
  styleUrls: ['./home-docentes.component.css']
})
export class HomeDocentesComponent implements OnInit {
  @ViewChild('containerCerrarSesion') containerCerrarSesion: ElementRef = new ElementRef(HTMLDivElement);

  // Variable que controlará el mostrar o no
  // el contenedor de cerrar sesión.
  boolMostrar: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleMostrar(){
    this.boolMostrar = !this.boolMostrar;
  }

  cerrarSesion(){
    this.router.navigate(['/']);
  }

}
