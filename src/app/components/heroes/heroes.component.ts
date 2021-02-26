import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroesService } from 'src/app/services/heroes.service';
import {Hero} from '../../model/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes : Observable<any>;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }

  addHero(newHero: Hero): void{
    this.heroesService.createHero(newHero)
  }

  removeHero(newHeroId: number): void {
    this.heroesService.deleteHero(newHeroId)
  }

}
