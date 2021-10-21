import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'filtromateria',
    templateUrl: './filtromateria.html',
    styleUrls: ['./filtromateria.css'],
})
export class filtromateria{
    public Asignaturas: String;

    constructor(private router: Router){
        this.Asignaturas= "Asignaturas";
        let Mensaje= `eje ${this.Asignaturas}.`;
        console.log(Mensaje);
    }
    navegate(url: String){
        this.router.navigate([`/${url}`]);    
    }
}