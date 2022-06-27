import { Mensaje } from "./mensaje";

export class Usuario {
    private nombreUsuario: string;
    private nombre: string;
    private contrasena: string;
    private susMensajes: Mensaje[];

    constructor (nombreUsuario: string, nombre: string, contrasena: string, susMensajes: Mensaje[]) {
        this.nombreUsuario = nombreUsuario;
        this.nombre = nombre;
        this.contrasena = contrasena;
        this.susMensajes = susMensajes;
    }
}