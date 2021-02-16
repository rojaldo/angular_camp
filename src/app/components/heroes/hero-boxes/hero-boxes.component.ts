import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-boxes',
  templateUrl: './hero-boxes.component.html',
  styleUrls: ['./hero-boxes.component.scss']
})
export class HeroBoxesComponent implements OnInit {

  @Input() name = '';
  @Input() description = '';
  constructor() { }

  ngOnInit(): void {
  }

}
