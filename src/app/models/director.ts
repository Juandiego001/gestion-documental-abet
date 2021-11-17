import { Usuario } from "./usuario";
import { Carrera } from "./carrera";
import { Reporte } from "./reporte";
import { Mensaje } from "./mensaje";
import { time } from "console";

export class Director extends Usuario {
    private suCarrera: Carrera;
    private susReportes: Reporte[];

    constructor (nombreUsuario: string, nombre: string, contrasena: string, susMensajes: Mensaje[], 
        suCarrera: Carrera, susReportes: Reporte[]){
        super(nombreUsuario, nombre, contrasena, susMensajes);
        this.suCarrera = suCarrera;
        this.susReportes = susReportes;
    }
}
