import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import * as uuid from 'uuid';
@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  @Output() addHeroSignal = new EventEmitter<Hero>();

  constructor() { }

  ngOnInit(): void {
  }

  addHero(heroName: any, heroDescription: any): void{
    let id = Math.random() * (1000000 - 1) + 1;
    this.addHeroSignal.emit(new Hero(id,heroName.value, heroDescription.value));
    
    heroName.value = '';
    heroDescription.value = '';
  }

}
