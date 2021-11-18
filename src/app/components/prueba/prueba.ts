import { Component } from "@angular/core";
import { Router } from '@angular/router';


@Component({
    selector: 'prueba',
    templateUrl: './prueba.html',
    styleUrls: ['./prueba.css'],

})

export class prueba{
    public NombreProfesor: String;
    public NombreAsignatura: string;    

    constructor(private router: Router){
        this.NombreProfesor= "Andrés Chapman";
        this.NombreAsignatura="Asignaturas"
        let Mensaje= `eje ${this.NombreProfesor}.`;
       
        console.log(Mensaje);
    }

    navigate(url: String) {
        this.router.navigate([`/${url}`]);
    }
}