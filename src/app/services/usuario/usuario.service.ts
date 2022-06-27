import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  api_uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  findOne(nombreUsuario: string, contrasena: string) {
    let paramsOptions = new HttpParams();

    paramsOptions = paramsOptions.set('nombreUsuario', nombreUsuario).set('contrasena', contrasena);

    let optionsHttp = {
      params: paramsOptions
    };

    return this.http.get(`${this.api_uri}/usuarios`, optionsHttp);
  }
  
  
}
