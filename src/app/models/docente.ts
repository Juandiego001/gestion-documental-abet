import { Usuario } from "./usuario";
import { Grupo } from "./grupo";
import { Mensaje } from "./mensaje";

export class Docente extends Usuario{
    private susGrupos: Grupo[]

    constructor(nombreUsuario: string, nombre: string, contrasena: string, susMensajes: Mensaje[], 
        susGrupos: Grupo[]){
        super(nombreUsuario, nombre, contrasena, susMensajes);
        this.susGrupos = susGrupos;
    }
}
