import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CervezaService {

  urlBase = 'https://api.punkapi.com/v2/beers';

  constructor(public http : HttpClient) { } //con esto se inyecta un servicio en otro servicio, desde aquí se puede usar Http con sus métodos

  getRequest():Observable<any>{ //Observable es un objeto (parecido al eventemitter), que encapsula la info que queremos
      return this.http.get(this.urlBase);
  }
}