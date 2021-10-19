import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'componentMateria',
    templateUrl: './componentMateria.html',
    styleUrls: ['./componentMateria.css'],
})
export class componentMateria{
    public Grupos: String;
    public num: number;

    constructor(private router: Router){
        this.Grupos= "Grupos";
        this.num= 3;
        let Mensaje= `eje ${this.Grupos} ${this.num}.`;
        console.log(Mensaje);
    }
    navegate(){
        this.router.navigate(['/GrupoFiltrado']);    
    }
}