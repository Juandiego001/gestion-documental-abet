import { IndicadorDesempeno } from "./indicador-desempeno";

export class Actividad {
    private id: number;
    private nombre: string;
    private tipo: number;
    private evidencia: string;
    private retroalimentacion: string;
    private suIndicador: IndicadorDesempeno;

    constructor(id: number, nombre: string, tipo: number, evidencia: string,
        retroalimentacion: string, suIndicador: IndicadorDesempeno){
            this.id = id;
            this.nombre = nombre;
            this.tipo = tipo;
            this.evidencia = evidencia;
            this.retroalimentacion = retroalimentacion;
            this.suIndicador = suIndicador;
        }
}
