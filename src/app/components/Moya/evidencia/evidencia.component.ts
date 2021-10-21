import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';

export interface Archivo {
    nombre: string;
    fecha_mod: string;
    tipo: string;
    tamano: number;
}

@Component({
    selector: 'app-evidencia',
    templateUrl: './evidencia.component.html',
    styleUrls: ['./evidencia.component.css']
})

export class EvidenciaComponent implements OnInit {
    public Grupos: String;
    archivos: Archivo[] = [
        {nombre: "Evidencia 1", fecha_mod: "2021-10-19 23:41", tipo: "Parcial", tamano: 700},
        {nombre: "Rubrica de evaluación", fecha_mod: "2021-10-19 23:41", tipo: "Documento guia", tamano: 700},
        {nombre: "Retroalimentación", fecha_mod: "2021-10-19 23:41", tipo: "Retroalimentación", tamano: 700}
    ];

    sortedData: Archivo[];

    constructor() {
        this.Grupos= "Grupos/Fundamentos de ingenieria multimedia/Grupo1/Evidencias/Corte1";
        this.sortedData = this.archivos.slice();
    }

    sortData(sort: Sort) {
        const data = this.archivos.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }

        this.sortedData = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'nombre': return compareS(a.nombre, b.nombre, isAsc);
                case 'fecha_mod': return compareS(a.fecha_mod, b.fecha_mod, isAsc);
                case 'tipo': return compareS(a.tipo, b.tipo, isAsc);
                case 'tamano': return compareN(a.tamano, b.tamano, isAsc);
                default: return 0;
            }
        });
    }

    ngOnInit(): void {
    }
}

function compareS(a:string, b:string, isAsc:boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

function compareN(a:number, b:number, isAsc:boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
