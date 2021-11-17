import { Asignatura } from "./asignatura";
import { Actividad } from "./actividad";


export class Grupo extends Asignatura{
    private susActividades: Actividad[];

    constructor(codigo: number, nombre: string, creditos: number, susActividades: Actividad[]){
        super(codigo, nombre, creditos);
        this.susActividades = susActividades;
    }
}
