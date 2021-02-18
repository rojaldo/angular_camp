import { Component, OnInit } from '@angular/core';
import { CervezaService } from 'src/app/services/cervezas.service';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-cervezas',
  templateUrl: './cervezas.component.html',
  styleUrls: ['./cervezas.component.scss']
})
export class CervezasComponent implements OnInit {

  cervezas:any[] = [];
  beers: any[] = [];

  value: number = 0;
  highValue: number = 5;
  options: Options = {
    floor: 0,
    ceil: 55,
    step: 0.1
  };

  constructor(public service: CervezaService) { }

  ngOnInit(): void {
    this.service.getRequest().subscribe(
      //parámetros predefinidos del subscribe del Observable y que funcione
      (data) => this.processData(data), //ejecución bien
      (error) => this.processError(error) //ejecución falla
    );
  }

  processData(data:any):void{
    //respuesta del servicio
    
    for (let i=0; i<data.length; i++){
      console.log(data[i]);
      this.cervezas.push(data[i]);
    }

    for (const cerveza of this.cervezas) {
      if(cerveza.abv >= this.value && cerveza.abv <= this.highValue){
        this.beers.push(cerveza)
      }
    }
  }

  processError(error:any):void{
    console.log(error);
  }

  handleChange(value:number, highValue:number):void{
    this.beers = [];
    for (const cerveza of this.cervezas) {
      if(cerveza.abv >= value && cerveza.abv <= highValue){
        this.beers.push(cerveza)
      }
    }
  }
}
