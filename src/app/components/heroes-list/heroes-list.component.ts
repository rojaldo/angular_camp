import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { Heroe } from 'src/app/models/Heroe';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

@Input() heroesList : Heroe[]; //con esto recibimos el array del componente padre (por su HTML y sus []) para poder usarlo en este componente de lista
@Output() removeHeroSignal = new EventEmitter<number>(); //con esto podemos mandar ciertos datos al componente padre, en este caso un Heroe para borrar del array

  constructor() { }

  ngOnInit(): void {
  }

  removeHero(index){
    console.log(index);
    this.removeHeroSignal.emit(index); //esta es la llamada a mandar la señal y su parámetro, aunque nadie la escuche, por eso ahora toca recibirla en el padre
  }

}
