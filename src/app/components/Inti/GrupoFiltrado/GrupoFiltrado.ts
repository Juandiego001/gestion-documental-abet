import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'GrupoFiltrado',
    templateUrl: './GrupoFiltrado.html',
    styleUrls: ['./GrupoFiltrado.css'],
    providers: [NgbModalConfig, NgbModal]
})
export class GrupoFiltrado{
    public Grupos: String;

    constructor(private router: Router , public modal: NgbModal ){
        this.Grupos= "Grupos/Fundamentos de Ingeniería Multimedia";
        let Mensaje= `eje ${this.Grupos}.`;
        console.log(Mensaje);
    }
    ngOnInit(): void {
    }
    openSM(contenido: any){
        this.modal.open(contenido,{size:'lg', centered: true});
      }
}