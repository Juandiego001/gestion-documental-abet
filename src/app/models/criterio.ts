export class Criterio {
    private porcentaje: number;
    private numOut: number;
    private outstanding: number;
    private numProf: number;
    private proficent: number;
    private numDev: number;
    private developing: number;
    private numBeg: number;
    private beginning: number;

    constructor(porcentaje: number, numOut: number, outstanding: number, numProf: number,
        proficent: number, numDev: number, developing: number, numBeg: number, beginning: number) {
            this.porcentaje = porcentaje;
            this.numOut = numOut;
            this.outstanding = outstanding;
            this.numProf = numProf;
            this.proficent = proficent;
            this.numDev = numDev;
            this.developing = developing;
            this.numBeg = numBeg;
            this.beginning = beginning;
    }
}
