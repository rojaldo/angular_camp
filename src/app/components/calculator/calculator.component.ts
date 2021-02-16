import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  
  result = '';

  constructor() { }

  ngOnInit(): void {
  }
  
  handleSignal(value) {
    this.result += value;
  }


}
