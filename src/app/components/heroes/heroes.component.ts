import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes = ['Batman', 'Superman', 'Spiderman'];
  desc = ['Murciélago', 'Kriptonita', 'Araña'];

  constructor() { }

  ngOnInit(): void {
  }

  addHero(name, desc){
    this.heroes.push(name.value);
    this.desc.push(desc.value);
    name.value = desc.value = '';
  }

  /*addDesc(tag){
    console.log(tag.value);
    this.heroes.push(tag.value);
    tag.value = '';
  }

  addAll(tag1, tag2){
    this.addHero(tag1);
    this.addDesc(tag2);
  }*/


}
