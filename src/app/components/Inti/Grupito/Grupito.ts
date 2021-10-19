import { Component } from "@angular/core";

@Component({
    selector: 'Grupito',
    templateUrl: './Grupito.html',
    styleUrls: ['./Grupito.css'],
})

export class Grupito{
    public NombreGrupo: String; 

    constructor(){
        this.NombreGrupo= "Andrés Chapman";
        let Mensaje= `eje ${this.NombreGrupo}.`;
        console.log(Mensaje);
    }
}