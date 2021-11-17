import { Grupo } from "./grupo";
import { Observable } from 'rxjs';;

export class Semestre {
    private inicio: Date;
    private fin: Date;
    private susGrupos: Grupo[];

    constructor(inicio: Date, fin: Date, susGrupos: Grupo[]){
        this.inicio = inicio;
        this.fin = fin;
        this.susGrupos = susGrupos;
    }
}
