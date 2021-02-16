import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  title = 'calculator';
  numero = 42;
  cuenta = '';

  result = '';



  handleSignal(value){
    this.result+=value;
  }


  haceClick(value){
    this.numero+=value;
  }




  /*valia eligenumero(value) y poner '1' en el html */
      eligeNumero(value){
        this.cuenta+=value;
      }
  
 /* eligeNumero(value){
    switch (value) {
      case 0:
          this.numero = 0;
          this.cuenta += "0";
        break;
        case 1:
          this.numero = 1;
          this.cuenta += "1";
        break;
        case 2:
          this.numero = 2;
          this.cuenta += "2";
        break;
        case 3:
          this.numero = 3;
          this.cuenta += "3";
        break;
        case 4:
          this.numero = 4;
          this.cuenta += "4";
        break;
        case 5:
          this.numero = 5;
          this.cuenta += "5";
        break;
        case 6:
          this.numero = 6;
          this.cuenta += "6";
        break;
        case 7:
          this.numero = 7;
          this.cuenta += "7";
        break;
        case 8:
          this.numero = 8;
          this.cuenta += "8";
        break;
        case 9:
          this.numero = 9;
          this.cuenta += "9";
        break;
        case 9:
          this.numero = 9;
          this.cuenta += "9";
        break;
        case "+":
          this.cuenta += "+";
        break;
        case "-":
          this.cuenta += "-";
        break;
        case "/":
          this.cuenta += "/";
        break;
        case "=":
          this.cuenta += "=";
        break;
        case "Reset":
          this.cuenta = "";
        break;
      default:
        break;
    }
  }*/
  constructor() { }

  ngOnInit(): void {
  }

}
