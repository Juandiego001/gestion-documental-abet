export class Asignatura {
    private codigo: number;
    private nombre:  string;
    private creditos: number;

    constructor(codigo: number, nombre: string, creditos: number) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.creditos = creditos;
    }
}
