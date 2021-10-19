import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carpetaEvidencia',
  templateUrl: './carpetaEvidencia.component.html',
  styleUrls: ['./carpetaEvidencia.component.css']
})
export class CarpetaEvidenciaComponent implements OnInit {
    nombre_carpeta = "Evidencia";
    constructor() { }

    ngOnInit(): void {
  }

}
