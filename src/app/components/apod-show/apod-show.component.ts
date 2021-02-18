import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod-show',
  templateUrl: './apod-show.component.html',
  styleUrls: ['./apod-show.component.scss']
})
export class ApodShowComponent implements OnInit {

  result:any;
  apiLoaded = false;

  @Input() date:string;

  constructor(public service: ApodService) { } //inyecta el servicio como atributo en el constructor para invocar a sus métodos

  ngOnInit(): void { //solo al inicio

    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }

    this.service.getRequest().subscribe(
      //parámetros predefinidos del subscribe del Observable y que funcione
      (data) => this.processData(data), //ejecución bien
      (error) => this.processError(error) //ejecución falla
    );
  }

  ngOnChanges(changes:SimpleChanges):void{ //detecta cambios en los inputs
    console.log(this.date);
    this.service.getRequest(this.date).subscribe(
      (data) => this.processData(data), 
      (error) => this.processError(error) 
    );
  }

  processData(data:any):void{
    //respuesta del servicio
    this.result=data;
    if(this.result.media_type==='video')
    {
      this.result.id = this.getId(this.result.url);
    }
  }

  processError(error:any):void{
    console.log(error);
  }
  
  getId(url:string):any{
    let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    let match = url.match(regExp);
    return (match && match[7].length === 11)? match[7] : false;
  }

}
