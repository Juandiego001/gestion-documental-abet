import { asNativeElements, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AsignaturaService } from 'src/app/services/asignatura/asignatura.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home-docentes',
  templateUrl: './home-docentes.component.html',
  styleUrls: ['./home-docentes.component.css']
})
export class HomeDocentesComponent implements OnInit {
  @ViewChild('containerCerrarSesion') containerCerrarSesion: ElementRef = new ElementRef(HTMLDivElement);
  @ViewChild('contenedorCrearAsignatura') containerCrearAsignatura: ElementRef = new ElementRef(HTMLDivElement);

  // Campos para crear asignatura
  @ViewChild('inputNombreAsignatura') inputNombreAsignatura: ElementRef = new ElementRef(HTMLDivElement);
  @ViewChild('selectCreditosAsignatura') selectCreditosAsignatura: ElementRef = new ElementRef(HTMLDivElement);
  @ViewChild('selectCarreraAsignatura') selectCarreraAsignatura: ElementRef = new ElementRef(HTMLDivElement);
  @ViewChild('inputCodigoAsignatura') inputCodigoAsignatura: ElementRef = new ElementRef(HTMLDivElement);

  // Variable que controlará el mostrar o no
  // el contenedor de cerrar sesión.
  boolMostrar: boolean = false;

  // Variable que controlará el mostrar o no
  // el contenedor de crear asignatura.
  boolMostrarAsignatura: boolean = false;

  constructor(private router: Router, private asignaturaService: AsignaturaService, private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  toggleMostrar(){
    this.boolMostrar = !this.boolMostrar;
  }

  toggleMostrarAsignatura(){
    this.boolMostrarAsignatura = !this.boolMostrarAsignatura;
  }

  crearAsignatura() {
    let nombre = this.inputNombreAsignatura.nativeElement.value;
    let creditos = this.selectCreditosAsignatura.nativeElement.value;
    let carrera = this.selectCarreraAsignatura.nativeElement.value;
    let codigo = this.inputCodigoAsignatura.nativeElement.value;
    let nombreUsuario = this.cookieService.get('nombreUsuario');
    let idSemestre = this.cookieService.get('idSemestre');

    if (nombre && creditos && carrera && codigo) {
      alert('Correcto! Todos los campos fueron digitados.');
      this.asignaturaService.crearAsignatura(nombre, creditos, carrera, codigo, nombreUsuario, idSemestre).subscribe(
        res => {
          alert('Inserción de asignatura realizada con éxito!');
          console.log(res);
        },
        err => {
          alert('Ha ocurrido un error al intentar crear la asignatura.');
          console.log(err);
        }
      );
    } else {
      alert('Error. Todos los campos son obligatorios.');
    }

  }

  cerrarSesion(){
    this.router.navigate(['/']);
  }

}
