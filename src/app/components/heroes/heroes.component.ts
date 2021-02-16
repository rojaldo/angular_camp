import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes = ['Batman', 'Superman', 'Spiderman'];

  constructor() { }

  ngOnInit(): void {
  }

  addHero(tag){
    console.log(tag.value);
    this.heroes.push(tag.value);
    tag.value = '';
  }

}