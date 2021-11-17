import { Semestre } from "./semestre";
import { Grupo } from "./grupo";
import { IndicadorDesempeno } from "./indicador-desempeno";

export class Reporte {
    private nombre: string;
    private elGrupo: Grupo;
    private elSemestre: Semestre;
    private elIndicador: IndicadorDesempeno;

    constructor(nombre: string, elGrupo: Grupo, elSemestre: Semestre,
        elIndicador: IndicadorDesempeno) {
            this.nombre = nombre;
            this.elGrupo = elGrupo;
            this.elSemestre = elSemestre;
            this.elIndicador = elIndicador;
    }
}
