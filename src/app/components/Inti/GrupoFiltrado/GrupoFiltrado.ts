import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'GrupoFiltrado',
    templateUrl: './GrupoFiltrado.html',
    styleUrls: ['./GrupoFiltrado.css'],
})
export class GrupoFiltrado{
    public Grupos: String;

    constructor(private router: Router){
        this.Grupos= "Grupos/Fundamentos de Ingeniería Multimedia";
        let Mensaje= `eje ${this.Grupos}.`;
        console.log(Mensaje);
    }
}