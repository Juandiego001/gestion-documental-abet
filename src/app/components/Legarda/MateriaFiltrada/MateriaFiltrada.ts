import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'MateriaFiltrada',
    templateUrl: './MateriaFiltrada.html',
    styleUrls: ['./MateriaFiltrada.css'],
})
export class Materiafiltrada{
    public Asignaturas: String;

    constructor(private router: Router){
        this.Asignaturas= "Asignaturas";
        let Mensaje= `eje ${this.Asignaturas}.`;
        console.log(Mensaje);
    }
   
}