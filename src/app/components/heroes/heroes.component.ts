import { Component, OnInit } from '@angular/core';
import {Heroe} from '../../models/Heroe';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})


export class HeroesComponent implements OnInit {

  heroes:Heroe [] = [];

  batman = new Heroe('Batman', 'Murciélago');
  superman = new Heroe('Superman', 'Capa');
  spiderman = new Heroe('Spiderman', 'Hombre araña');

  constructor() { }

  ngOnInit(): void {
    this.heroes.push(this.batman);
    this.heroes.push(this.superman);
    this.heroes.push(this.spiderman);
  }

  addHero(newHero : Heroe):void{
    this.heroes.push(newHero); //este NewHero viene recibido del HTML que lo pilla del eventemitter con output del heroes-form
  }

  removeHero(index:number):void{
    this.heroes.splice(index, 1); //este index viene del HTML, que a su vez lo recibe del TS de la lista (output y eventemitter)
  }
}
