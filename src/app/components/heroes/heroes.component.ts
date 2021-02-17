import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes = [];

  constructor() {}

  ngOnInit(): void {}

  getHero(event) {
    console.log(event);
    this.heroes.push(event);
  }

  deleteHero($event){
    this.heroes.splice(this.heroes.indexOf($event),1);
  }
}
