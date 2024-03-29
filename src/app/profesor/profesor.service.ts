import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_SERVICIOS } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  api = URL_SERVICIOS;
  
  private httpHeaders= new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http:HttpClient) { }

  ListaProfesor01(): Observable<any>{
    return this.http.get<any>(this.api+"/profesor/lista01")
  }
}
