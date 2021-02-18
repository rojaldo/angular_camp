import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  urlBase = 'https://restcountries.eu/rest/v2/all';

  constructor(public http : HttpClient) { } //con esto se inyecta un servicio en otro servicio, desde aquí se puede usar Http con sus métodos

  getRequest():Observable<any>{ //Observable es un objeto (parecido al eventemitter), que encapsula la info que queremos
      return this.http.get(this.urlBase);
  }
}
