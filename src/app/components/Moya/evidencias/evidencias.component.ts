import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-evidencias',
    templateUrl: './evidencias.component.html',
    styleUrls: ['./evidencias.component.css']
})
export class EvidenciasComponent implements OnInit {
    descripcion: String = "Grupos/Fundamentos de ingeniería multimedia/Grupo1/Evidencias";
    profesor: String = "Camilo Franco Moya";

    constructor() {
    }

    ngOnInit(): void {
    }

}
