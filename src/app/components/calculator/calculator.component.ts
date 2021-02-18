import { Component, OnDestroy, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
  //providers:[CalculatorService] //8. aquí mejor para estar a nivel de componente
})
export class CalculatorComponent implements OnInit, OnDestroy {
  
  display='';

  constructor(public service: CalculatorService) { } //5. constructor lo mas limpio posible, con el objetivo de alojar servicios. Los servicios se inyectan en el constructor

  ngOnDestroy(): void {
    console.log("ngOnDestroy()");
  }

  ngOnInit(): void {
    console.log("ngOnInit()");
    this.display=this.service.getDisplay();
  }

  handleSignal(value: any): void {
    // this.result += value;
    if(typeof value === 'string'){
      this.display = this.service.handleSymbol(value); // 4. se recoge el valor del handleSignal, previamente establecido en el html de lo que viene del output. Se castea él sólo al tipo de dato que llega
    } else if(typeof value === 'number') {
      this.display = this.service.handleNumber(value);
    }
  }

}
