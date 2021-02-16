import { Component, OnInit } from '@angular/core';

enum states {INIT, FIRST_FIGURE, SECOND_FIGURE, RESULT}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  display = '';
  currentState = states.INIT;
  firstFigure = 0;
  secondFigure = 0;
  result = 0;
  operator = '';

  constructor() { }

  ngOnInit(): void {
  }

  handleSignal(value: any): void {
    // this.result += value;
    if(typeof value === 'string'){
      this.handleSymbol(value);
    } else if(typeof value === 'number') {
      this.handleNumber(value);
    }
  }
  handleNumber(value: number): void {
    switch (this.currentState) {
      case states.INIT:
        this.firstFigure = value;
        this.currentState = states.FIRST_FIGURE;
        this.display = '' + value;
        break;
      case states.FIRST_FIGURE:
        this.firstFigure = this.firstFigure * 10 + value;
        this.display += value;
        break;
      case states.SECOND_FIGURE:
        this.secondFigure = this.secondFigure * 10 + value;
        this.display += value;
        break;
      case states.RESULT:
        this.result = 0;
        this.secondFigure = 0;
        this.operator = '';
        this.firstFigure = value;
        this.currentState = states.FIRST_FIGURE;
        this.display = '' + value;
        break;
      default:
        break;
    }
  }

  handleSymbol(value: string): void {
    switch (this.currentState) {
      case states.INIT:
      break;
      case states.FIRST_FIGURE:
        if (value === '+' || value === '-' || value === '*' || value === '/'){
          this.operator = value;
          this.display += value;
          this.currentState = states.SECOND_FIGURE;
        }
        break;
      case states.SECOND_FIGURE:
        if (value === '='){
          this.result = this.resolve();
          this.display = this.display + '=' + this.result;
          this.currentState = states.RESULT;
        }
        break;
      case states.RESULT:
        this.secondFigure = 0;
        this.operator = value;
        this.firstFigure = this.result;
        this.result = 0;
        this.currentState = states.SECOND_FIGURE;
        this.display = '' + this.firstFigure + this.operator;
        break;
      default:
      break;
    }
  }

  resolve(): number {
    switch (this.operator) {
      case '+':
        return this.firstFigure + this.secondFigure;
      case '-':
        return this.firstFigure - this.secondFigure;
      case '*':
        return this.firstFigure * this.secondFigure;
      case '/':
        return this.firstFigure / this.secondFigure;
      default:
        break;
    }
  }

}
