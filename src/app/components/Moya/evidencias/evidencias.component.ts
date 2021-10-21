import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-evidencias',
    templateUrl: './evidencias.component.html',
    styleUrls: ['./evidencias.component.css']
})
export class EvidenciasComponent implements OnInit {
    nombre_profesor = "Camilo Franco Moya";
    public Grupos: String;
    constructor() {
        this.Grupos= "Grupos/Fundamentos de ingenieria multimedia/Grupo1/Evidencias";
    }

    ngOnInit(): void {
    }

}
