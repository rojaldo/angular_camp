import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  @Input() heroesList: any;
  @Output() removeHeroSignal = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  removeHero(ID: number): void {
    this.removeHeroSignal.emit(ID);
  }

}
