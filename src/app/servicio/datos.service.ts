import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http:HttpClient) { }
  obtenerDatos():Observable<any>{return this.http.get('./assets/datos/AcercaDe.json');}
  obtenerDatosEducacion():Observable<any>{return this.http.get('./assets/datos/educacion.json');}
}
