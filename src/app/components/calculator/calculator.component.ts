import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  cadena = "";
  title = 'calculator';
  numero = 42;
  matriz:string[][] = [['7','8','9','/'],['4','5','6','x'],['1','2','3','-'], ['0',',','+','=']];

  //tablacal:string[] = ['7','8','9','/','4','5','6','x','1','2','3','-', '0',',','+','='];

  result = "";

  constructor() { }

  ngOnInit(): void {
  }

  hazClick(value) {
    this.numero += value;
  }

  concatenar(valor) {
    this.cadena = this.cadena.concat(valor);
  }

  handleSignal(value) {
    this.result += value;
  }
}
