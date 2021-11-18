import { Component } from "@angular/core";

@Component({
    selector: 'Grupito',
    templateUrl: './Grupito.html',
    styleUrls: ['./Grupito.css'],
})

export class Grupito {
    public NombreProfesor: String;

    constructor() {
        this.NombreProfesor = "Andrés Chapman";
        let Mensaje = `eje ${this.NombreProfesor}.`;
        console.log(Mensaje);
    }
}