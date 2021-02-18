import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Heroe } from 'src/app/models/Heroe';

@Component({
  selector: 'app-heroes-form',
  templateUrl: './heroes-form.component.html',
  styleUrls: ['./heroes-form.component.scss']
})
export class HeroesFormComponent implements OnInit {

  @Output() addHeroSignal = new EventEmitter<Heroe>();

  constructor() { }

  ngOnInit(): void {
  }

  addHero(heroName:any, heroDesc:any){
    //this.heroes.push(new Heroe(heroName.value,heroDesc.value)); esto se recibe del formulario y hay que hacer un output al array del componente
    this.addHeroSignal.emit(new Heroe(heroName.value,heroDesc.value)); //con esto se envía a donde sea
    heroName.value = '';
    heroDesc.value = '';
  }

}
