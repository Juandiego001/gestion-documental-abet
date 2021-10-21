import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'GruposAsignatura',
    templateUrl: './GruposAsignatura.html',
    styleUrls: ['./GruposAsignatura.css'],
})
export class GruposAsignatura{
    public Grupos: String;
    public num: number;

    constructor(private router: Router){
        this.Grupos= "Grupos";
        this.num= 3;
        let Mensaje= `eje ${this.Grupos} ${this.num}.`;
        console.log(Mensaje);
    }
    navegate(url: String){
        this.router.navigate([`/${url}`]);    
    }
}
