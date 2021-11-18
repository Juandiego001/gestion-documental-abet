import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  api_uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  crearAsignatura(nombre: string, creditos: number, nombreCarrera: string, codigo: string, 
    nombreUsuario: string, idSemestre: string) {
    let paramsOptions = new HttpParams();

    paramsOptions = paramsOptions.set('nombre', nombre)
      .set('creditos', creditos)
      .set('nombreCarrera', nombreCarrera)
      .set('codigo', codigo)
      .set('nombreUsuario', nombreUsuario)
      .set('idSemestre', idSemestre)

    let optionsHttp = {
      params: paramsOptions
    };

    return this.http.post(`${this.api_uri}/asignaturas`, optionsHttp);
  }
}
