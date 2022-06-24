import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_SERVICIOS } from 'src/environments/environment';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  api = URL_SERVICIOS;
  
  private httpHeaders= new HttpHeaders({'Content-Type': 'application/json'})
  
  constructor(
    private http:HttpClient
    ) { }

  ListaPersona(): Observable<any>{
    return this.http.get<any>(this.api+"/persona/lista")
  }

  //pararegisrtrar escuela
  registrarPersona01(persona:Persona):Observable<any>{
    return this.http.post(this.api+"/persona/registrar",persona,{headers: this.httpHeaders})
  }
}
