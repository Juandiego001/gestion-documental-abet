import { Grupo } from "./grupo";
import { RubricaSO } from "./rubrica-so";
import { IndicadorDesempeno } from "./indicador-desempeno";

export class ResultadoAprendizaje {
    private id: number;
    private descripcion: string;
    private susGrupos: Grupo[];
    private susRubricas: RubricaSO[];
    private susIndicadores: IndicadorDesempeno[];

    constructor(id: number, descripcion: string, susGrupos: Grupo[], susRubricas: RubricaSO[],
        susIndicadores: IndicadorDesempeno[]){
            this.id = id;
            this.descripcion = descripcion;
            this.susGrupos = susGrupos;
            this.susRubricas = susRubricas;
            this.susIndicadores = susIndicadores;
    }
}
