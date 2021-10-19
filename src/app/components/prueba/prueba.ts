import { Component } from "@angular/core";

@Component({
    selector: 'prueba',
    templateUrl: './prueba.html',
    styleUrls: ['./prueba.css'],

})

export class prueba{
    public NombreProfesor: String;
    public NombreAsignatura: string;
    

    constructor(){
        this.NombreProfesor= "Andrés Chapman";
        this.NombreAsignatura="Asignaturas"
        let Mensaje= `eje ${this.NombreProfesor}.`;
        console.log(Mensaje);
    }
}