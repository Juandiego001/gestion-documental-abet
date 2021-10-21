import { Component, ElementRef, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'componentMateria',
    templateUrl: './componentMateria.html',
    styleUrls: ['./componentMateria.css'],
})

export class componentMateria{
    // Se crean los atributos del componente.
    // ATENCIÓN: Aún se desconoce si el código
    // de la asignatura debe ser de tipo texto
    @Input() nombreAsignatura: String = '';
    @Input() cantidadCursos: Number = 0;
    @Input() codigoAsignatura: Number = 0;
    @Input() periodoAcademico: String = '';
    @Input() srcImg: String = '';

    constructor(private router: Router){}
}