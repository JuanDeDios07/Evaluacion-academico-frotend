import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_SERVICIOS } from 'src/environments/environment';
import { Asignatura } from './asignatura';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  api = URL_SERVICIOS;
  
  private httpHeaders= new HttpHeaders({'Content-Type': 'application/json'})
  
  constructor(
    private http:HttpClient
    ) { }

    
  ListaAsignaturaService(): Observable<any>{
    return this.http.get<any>(this.api+"/curso/lista01")
  }

  //pararegisrtrar escuela
  registrarAsignaturaService(asignatura:Asignatura):Observable<any>{
    return this.http.post(this.api+"/curso/registrar",asignatura,{headers: this.httpHeaders})
  }
}
