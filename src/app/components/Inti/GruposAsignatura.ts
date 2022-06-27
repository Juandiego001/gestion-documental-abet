import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'GruposAsignatura',
    templateUrl: './GruposAsignatura.html',
    styleUrls: ['./GruposAsignatura.css'],
    providers: [NgbModalConfig, NgbModal]
})
export class GruposAsignatura{
    public Grupos: String;
    public num: number;   

    constructor(private router: Router , public modal: NgbModal ){
        this.Grupos= "Grupos";
        this.num= 3;
        let Mensaje= `eje ${this.Grupos} ${this.num}.`;
        console.log(Mensaje);
    }
    navegate(url: String){
        this.router.navigate([`/${url}`]);    
    }
    ngOnInit(): void {
    }
    openSM(contenido: any){
        this.modal.open(contenido,{size:'lg', centered: true});
      }
}