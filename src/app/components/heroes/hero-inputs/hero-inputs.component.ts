import { Component, OnInit, EventEmitter, Output } from '@angular/core';

interface Heroe{
  name: string;
  desc: string;
}

@Component({
  selector: 'app-hero-inputs',
  templateUrl: './hero-inputs.component.html',
  styleUrls: ['./hero-inputs.component.scss']
})
export class HeroInputsComponent implements OnInit {

  @Output() hero: any = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  addHero(name,desc){
    let hero: Heroe;
    hero = {name:name.value, desc:desc.value};
    this.hero.emit(hero);
  }

}
