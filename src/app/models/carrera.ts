import { Asignatura } from "./asignatura";

export class Carrera {
    public codigo: number;
    public nombre: string;
    public susAsignaturas: Asignatura[];

    constructor(codigo: number, nombre: string, susAsignaturas: Asignatura[]) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.susAsignaturas = susAsignaturas;
    }
}
