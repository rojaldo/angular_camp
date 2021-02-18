import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApodService {

  urlBase = 'https://api.nasa.gov/planetary/apod?api_key=ZZH9D42dws2ude37k17LkhGY18XncCfh4obQ4hkz';

  constructor(public http : HttpClient) { } //con esto se inyecta un servicio en otro servicio, desde aquí se puede usar Http con sus métodos

  getRequest(fechaString?:string):Observable<any>{ //Observable es un objeto (parecido al eventemitter), que encapsula la info que queremos
    if(fechaString)
    {
      return this.http.get(this.urlBase+fechaString);
    }
    else{
      return this.http.get(this.urlBase);
    }
  }
}
