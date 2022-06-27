import { Usuario } from "./usuario";

export class Mensaje {
    private emisor: Usuario;
    private asunto: string;
    private contenido: string;
    private fecha: Date;
    private hora: Date;

    constructor (emisor: Usuario, asunto: string, contenido: string, fecha: Date,
        hora: Date) {
            this.emisor = emisor;
            this.asunto = asunto;
            this.contenido = contenido;
            this.fecha = fecha;
            this.hora = hora;
        }
}
