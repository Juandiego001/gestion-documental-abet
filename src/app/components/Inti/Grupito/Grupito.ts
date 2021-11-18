import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'Grupito',
    templateUrl: './Grupito.html',
    styleUrls: ['./Grupito.css'],
})

export class Grupito {
    public NombreProfesor: String;

    constructor(private router: Router) {
        this.NombreProfesor = "Andrés Chapman";
        let Mensaje = `eje ${this.NombreProfesor}.`;
        console.log(Mensaje);
    }

    irEvidencia() {
        this.router.navigate(['/evidencias']);
    }
}