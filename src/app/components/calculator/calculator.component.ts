import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {


  title = 'calculator';
  numero = "";

  constructor() { }

  ngOnInit(): void {
  }

  handleSignal(value){
    if(value=="C")
    {
      this.numero="";
    }
    else{
      this.numero += value; // 4. se recoge el valor del handleSignal, previamente establecido en el html de lo que viene del output. Se castea él sólo al tipo de dato que llega
    }
    
  }

}
