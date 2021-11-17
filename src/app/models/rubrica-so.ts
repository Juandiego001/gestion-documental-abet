import { Criterio } from "./criterio";

export class RubricaSO {
    private noEstudiantes: number;
    private insMedicion: string;
    private susCriterios: Criterio[];
    private resultados: string;
    private mejoras: string;

    constructor(noEstudiantes: number, insMedicion: string, susCriterios: Criterio[],
        resultados: string, mejoras: string) {
            this.noEstudiantes = noEstudiantes;
            this.insMedicion = insMedicion;
            this.susCriterios = susCriterios;
            this.resultados = resultados;
            this.mejoras = mejoras;
        }
}
