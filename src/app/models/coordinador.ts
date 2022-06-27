import { Usuario } from "./usuario";
import { Mensaje } from "./mensaje";

export class Coordinador extends Usuario{
    constructor (nombreUsuario: string, nombre: string, contrasena: string, susMensajes: Mensaje[]){
        super(nombreUsuario, nombre, contrasena, susMensajes);
    }
    
}
