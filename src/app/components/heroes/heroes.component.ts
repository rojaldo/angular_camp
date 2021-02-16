import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes = ['Batman', 'Superman', 'Spiderman'];
  description = ['Rich guy', 'Child-like god', 'Your friend and neighbour']

  constructor() { }

  ngOnInit(): void {
  }

  addHero(name, desc){
    this.heroes.push(name.value);
    this.description.push(desc.value);
    name.value = desc.value = '';
  }

}
