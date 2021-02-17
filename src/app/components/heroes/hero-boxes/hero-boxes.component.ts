import { Component, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-boxes',
  templateUrl: './hero-boxes.component.html',
  styleUrls: ['./hero-boxes.component.scss'],
})
export class HeroBoxesComponent implements OnInit, OnDestroy {
  @Input() name = '';
  @Input() description = '';
  @Output() deleteSignal = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  removeHero(name,desc){
    //Debería ser un objeto de tipo héroe, pero prefiero desacoplarlo
    this.deleteSignal.emit({name:name,desc:desc});
  }
}
