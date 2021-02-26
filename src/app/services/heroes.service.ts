import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(public http: HttpClient) { }


  url = "http://localhost:8080/api/v1/heroes"

  getHeroes(){
    return this.http.get(this.url);
  }

  createHero(newHero){
    return this.http.post(this.url,newHero);
  }

  deleteHero(ID){
    return this.http.delete(this.url,ID);
  }
}
